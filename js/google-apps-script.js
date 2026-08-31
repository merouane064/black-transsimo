/*******************************************************************************
 * BLACK TRANSSIMO - Google Sheets Booking Sync (Apps Script Web App)
 * ====================================================================
 * WHY THIS EXISTS
 * --------------
 * The site is fully static (zero backend). Booking emails go out via EmailJS,
 * but bookings were only ever saved to the VISITOR'S OWN browser localStorage,
 * so they never appeared in the owner's admin panel. This Apps Script Web App
 * gives bookings a shared, always-visible home: a Google Sheet.
 *
 * WHAT IT DOES  (all requests carry their data as **query parameters** - see
 * "IMPORTANT" below for why)
 * ----------------s
 *  - admin refresh            -> GET /          -> returns ALL bookings as JSON
 *  - new booking / send       -> GET ?action=create&id=...&name=...&status=...
 *                                             -> appends a row
 *  - admin Status dropdown    -> GET ?action=updateStatus&id=...&status=...
 *                                             -> updates the status column by id
 *
 * SETUP (5 minutes) - see google-apps-script-setup.md for the full walkthrough.
 * ===============
 *  1. sheets.new  -> create a blank Google Sheet.
 *  2. Extensions -> Apps Script -> paste this whole file.
 *  3. On the first tab, name it  Bookings  and add a header row:
 *        id | created | status | name | phone | email | passengers | date |
 *        time | returnDate | returnTime | vehicle | service | pickup |
 *        destination | message
 *      (Not required: if no tab is named "Bookings", the script auto-uses the
 *       first tab, or creates one if the spreadsheet is empty.)
 *  4. Deploy -> New deployment -> Web app -> Execute as: Me ->
 *        Who has access: Anyone  -> Deploy -> copy the /exec Web App URL.
 *  5. Paste that URL into js/config.js as  SHEETS.endpoint.
 *
 *  IMPORTANT (why query parameters, not a request body):
 *  ----------
 *  A Web App /exec URL answers a write request with a **302 redirect** to
 *  script.googleusercontent.com. A browser (and most HTTP clients) following
 *  that redirect drops the POST body - the script then receives an empty
 *  payload and would generate a brand-new id / do nothing. Data placed in the
 *  URL query string survives the redirect untouched, so that's what the site
 *  sends. The JSON request body is still parsed as a fallback.
 *
 *  ALSO IMPORTANT: after editing THIS file you must re-deploy a NEW VERSION
  *  (Deploy -> Manage deployments -> New version -> Deploy) for the running
 *  Web App to pick it up. The /exec URL itself stays unchanged.
 *
 ******************************************************************************/

var SHEET_NAME = "Bookings";

var HEADERS = [
  "id", "created", "status", "name", "phone", "email", "passengers",
  "date", "time", "returnDate", "returnTime", "vehicle", "service",
  "pickup", "destination", "message"
];

/* Collect request data. Query parameters (e.parameter) are the primary source
   because they survive the 302 redirect; a JSON body is a secondary source. */
function params_(e) {
  var p = {};
  if (e && e.parameter) {
    for (var k in e.parameter) {
      if (Object.prototype.hasOwnProperty.call(e.parameter, k)) p[k] = e.parameter[k];
    }
  }
  if (e && e.postData && e.postData.contents) {
    try {
      var body = JSON.parse(e.postData.contents);
      for (var k2 in body) {
        if (Object.prototype.hasOwnProperty.call(body, k2)) p[k2] = body[k2];
      }
    } catch (err) { /* ignore malformed body - query params may still be set */ }
  }
  return p;
}

/* Resolve the sheet to write/read. Prefers the tab named exactly "Bookings",
   but falls back to the first tab (and creates one if the spreadsheet is empty)
   so a setup that didn't rename the tab still works. */
function getSheet_() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var main = book.getSheetByName(SHEET_NAME);
  if (main) return main;
  var sheets = book.getSheets();
  if (sheets.length) return sheets[0];
  var created = book.insertSheet(SHEET_NAME);
  created.appendRow(HEADERS);
  return created;
}

/* Single router for both GET and POST. */
function handle_(data) {
  try {
    var action = String(data.action || "").toLowerCase();
    if (action === "ping") {
      /* Diagnostic: confirms which version is live and echoes back exactly what
         arrived, so a redeploy can be verified. */
      return json_({
        ok: true,
        version: "2.15.0",
        note: "ping received",
        actionSeen: action,
        params: data
      });
    }
    if (action === "create") {
      return create_(getSheet_(), data);
    }
    if (action === "updatestatus") {
      return updateStatus_(getSheet_(), data);
    }
    return list_(getSheet_());
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/* Return every booking (newest first) - used by the admin panel. */
function list_(sheet) {
  var rows = sheet.getDataRange().getValues();
  if (rows.length === 0) return json_({ ok: true, bookings: [] });
  var header = rows[0];
  var bookings = [];
  for (var r = 1; r < rows.length; r++) {
    var obj = {};
    for (var c = 0; c < header.length; c++) {
      obj[String(header[c]).trim()] = rows[r][c];
    }
    bookings.push(obj);
  }
  bookings.reverse();
  return json_({ ok: true, bookings: bookings });
}

/* Append a new booking row. */
function create_(sheet, data) {
  var booking = {};
  HEADERS.forEach(function (k) {
    var v = data[k];
    booking[k] = (v === undefined || v === null) ? "" : String(v);
  });
  if (!booking.id || !booking.created) {
    booking.id = "BK" + Date.now();
    booking.created = new Date().toISOString();
  }
  if (!booking.status) booking.status = "pending";

  sheet.appendRow(HEADERS.map(function (k) { return booking[k]; }));

  return json_({ ok: true, id: booking.id });
}

/* Update the status of an existing booking row, matched by id. */
function updateStatus_(sheet, data) {
  if (!data.id) throw new Error("Missing id for status update.");
  var status = normalizeStatus_(String(data.status || ""));
  if (!status) throw new Error("Invalid status: " + data.status);

  var header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  /* Trim header cells - they may carry leading/trailing whitespace entered by
     hand in the spreadsheet, and list_() relies on trim too. Without trimming
     here, the id/status column lookups below would fail and this update would
     be incorrectly reported as "missing headers". */
  var headerNorm = header.map(String).map(function (h) { return String(h).trim(); });
  var idCol = headerNorm.indexOf("id");          // 0-based col index
  var statusCol = headerNorm.indexOf("status");  // 0-based col index
  if (idCol === -1 || statusCol === -1) {
    throw new Error("Sheet is missing 'id' or 'status' header columns.");
  }

  var rows = sheet.getDataRange().getValues();
  for (var r = 1; r < rows.length; r++) {
    if (String(rows[r][idCol] || "").trim() === String(data.id).trim()) {
      sheet.getRange(r + 1, statusCol + 1).setValue(status);
      return json_({ ok: true, id: data.id, status: status });
    }
  }
  throw new Error("Booking id not found in sheet: " + data.id);
}

/* Normalize a status to one of the three canonical lowercase values. Unknown
   values return null (caller rejects them). Known spelling variants (e.g.
   "Canceled") are folded to the canonical form for robustness. */
function normalizeStatus_(value) {
  var s = String(value || "").toLowerCase().trim();
  if (s === "pending" || s === "confirmed") return s;
  if (s === "cancelled" || s === "canceled") return "cancelled";
  return null;
}

/* doGet / doPost wrappers so the file maps cleanly to Deployment types. */
function doGet(e) {
  try { return handle_(params_(e)); } catch (err) { return json_({ ok: false, error: String(err) }); }
}
function doPost(e) {
  try { return handle_(params_(e)); } catch (err) { return json_({ ok: false, error: String(err) }); }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  // Note: ContentService.WebApp allows cross-origin public reads by default, so
  // no manual CORS header is required for the admin fetch.
}
