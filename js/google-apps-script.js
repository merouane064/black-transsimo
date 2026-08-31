/*******************************************************************************
 * BLACK TRANSSIMO — Google Sheets Booking Sync (Apps Script Web App)
 * ====================================================================
 * WHY THIS EXISTS
 * --------------
 * The site is fully static (zero backend). Booking emails go out via EmailJS,
 * but bookings were only ever saved to the VISITOR'S OWN browser localStorage,
 * so they never appeared in the owner's admin panel. This Apps Script Web App
 * gives bookings a shared, always-visible home: a Google Sheet.
 *
 * WHAT IT DOES
 * ------------
 *  • POST (doPost):  appends a new booking to the sheet's "Bookings" tab.
 *  • GET  (doGet):   returns ALL bookings as JSON so the admin panel can
 *                    display them (cross-origin CORS enabled).
 *
 * SETUP (5 minutes) — see google-apps-script-setup.md for the full walkthrough.
 * ===============
 *  1. sheets.new  → create a blank Google Sheet.
 *  2. Extensions → Apps Script → paste this whole file.
 *  3. On the first tab, name it  Bookings  and add a header row:
 *        id | created | status | name | phone | email | passengers | date |
 *        time | returnDate | returnTime | vehicle | service | pickup |
 *        destination | message
 *      (Not required: if no tab is named "Bookings", the script auto-uses the
 *       first tab, or creates one if the spreadsheet is empty.)
 *  4. Deploy → New deployment → Web app → Execute as: Me →
 *        Who has access: Anyone  → Deploy → copy the /exec Web App URL.
 *  5. Paste that URL into js/config.js as  SHEETS.endpoint.
 *
 *  IMPORTANT after editing this file: re-deploy a NEW VERSION
 *  (Deploy → Manage deployments → ✏️ → New version), otherwise the old code
 *  keeps running.
 *
 ******************************************************************************/

var SHEET_NAME = "Bookings";

var HEADERS = [
  "id", "created", "status", "name", "phone", "email", "passengers",
  "date", "time", "returnDate", "returnTime", "vehicle", "service",
  "pickup", "destination", "message"
];

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

function doGet_(e) {
  try {
    var sheet = getSheet_();

    var rows = sheet.getDataRange().getValues();
    if (rows.length === 0) {
      return json_({ ok: true, bookings: [] });
    }
    var header = rows[0];
    var bookings = [];
    for (var r = 1; r < rows.length; r++) {
      var obj = {};
      for (var c = 0; c < header.length; c++) {
        obj[String(header[c]).trim()] = rows[r][c];
      }
      bookings.push(obj);
    }
    bookings.reverse(); /* newest first */
    return json_({ ok: true, bookings: bookings });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doPost_(e) {
  try {
    var sheet = getSheet_();

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        throw new Error("Invalid JSON body: " + err);
      }
    }

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
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/* doGet / doPost wrappers so the file maps cleanly to Deployment types. */
function doGet(e) {
  // Wrap in try/catch so an early throw still returns JSON.
  try { return doGet_(e); } catch (err) { return json_({ ok: false, error: String(err) }); }
}
function doPost(e) {
  try { return doPost_(e); } catch (err) { return json_({ ok: false, error: String(err) }); }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  // Note: ContentService.WebApp allows cross-origin public reads by default, so
  // no manual CORS header is required for the admin fetch.
}
