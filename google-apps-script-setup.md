# BLACK TRANSSIMO — Google Sheets Booking Sync — Setup Guide

When the site is fully static (zero backend), bookings were only ever stored in
the visitor's own browser `localStorage`, so they never reached the owner's admin
panel — even though the EmailJS email notification worked. This sync fixes that by
giving every booking a shared home: a **Google Sheet**, written via a free
**Google Apps Script Web App**.

Below is the whole setup, end to end. It takes about 5 minutes and costs nothing.

---

## 1. Create the Google Sheet

1. Go to <https://sheets.new> (opens a blank Google Sheet).
2. You must be signed in with the Google account that should own the bookings
   (recommended: `meromarwan064@gmail.com`).
3. **Rename the first tab to `Bookings`** (it's usually "Sheet1").
4. Add this exact header row in row 1 (16 columns, in this order):

   ```
   id | created | status | name | phone | email | passengers | date | time | returnDate | returnTime | vehicle | service | pickup | destination | message
   ```

   These names match the booking form fields and the columns read by the admin.

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the default `function myFunction() {}`.
3. Paste the **entire contents of `js/google-apps-script.js`** (in this repo) into the
   editor.
4. Click the **Save** icon (💾) and give the project a name, e.g. *BLACK TRANSSIMO bookings*.

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear (⚙️) icon next to *Select type* → choose **Web app**.
3. Fill in:
   - **Description**: `Bookings sync`
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**
4. Click **Deploy**.
5. A dialog shows the **Web app URL** ending in `/exec` — **copy it**.

> ⚠️ If you later change the script (e.g. add columns), you must
> **Deploy → Manage deployments → ✏️ → New version**, then OK. The `/exec` URL
> stays the same — only its version changes.

## 4. Point the site at it

Open **`js/config.js`** and add the `/exec` URL under a new `SHEETS` block:

```js
/* ---------- GOOGLE SHEETS SYNC (see google-apps-script-setup.md) ---------- */
SHEETS: {
  /* Paste the Apps Script Web App /exec URL here. Leave empty to disable sync. */
  endpoint: "https://script.google.com/macros/s/XXXXXXXXXXXXXX/exec"
}
```

## 5. You're done — what now works

- **Booking submitted on the site** → `booking.js` POSTs it to the Web App →
  appended to the Sheet's `Bookings` tab (in addition to the EmailJS email and
  the visitor's own localStorage).
- **Admin panel (`admin.html`)** → fetches all bookings from the Web App and
  merges them with the local ones, so a booking made by any visitor anywhere is
  visible to the owner on the device that opens the admin page.
- **Status dropdown stays synchronized** → when the admin changes a booking's
  Status (Pending / Confirmed / Cancelled), `admin.html` updates the local copy
  **and** POSTs `{ action: "updateStatus", id, status }` to the Web App, which
  writes the new status back to the matching row in the Sheet. The same applies
  to the Electron admin. (Best-effort: the local UI updates immediately even if
  the network/Web App is briefly unavailable.)

> ⚠️ **Any time the Apps Script is edited, you must deploy a NEW VERSION** for the
> change to take effect (Deploy → Manage deployments → ✏️ → New version → Deploy).
> The `/exec` URL itself stays the same.

---

## Behaviour notes

- **Offline/missing config**: if `SHEETS.endpoint` is empty *or* the network/Web
  App fails, the booking **still registers** in the visitor's browser and the
  EmailJS email still goes out — Sheets sync is a best-effort addition, never a
  blocker. The admin panel shows the standard "Sync to Sheets not configured /
  unreachable" notice instead of erroring out.
- **Admin reads** are also best-effort: local bookings always render; Sheet
  bookings are added when reachable.
- **Duplicate prevention**: the site only appends a row for a booking that
  actually sent; the sheet row's `id` matches the one stored locally, so a
  manual reconciliation is straightforward.
- **Security note**: this is a *write-public* Web App (anyone with the URL can
  append). That is acceptable for collecting bookings, but it is **not** secret
  data storage. If you later need stricter control, add a token check in
  `doPost_` in `js/google-apps-script.js`.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Admin shows "Sync not reachable" | Check the `/exec` URL in `js/config.js`; ensure deployment is a **Web app** with access **Anyone**; re-deploy a new version after edits. |
| New bookings not appearing in sheet / status resets to pending on refresh | **Root cause found:** Google Apps Script `/exec` returns a **302 redirect** on writes, and the redirect **drops the POST body** — the script got an empty payload (it kept generating new ids / never updating status). The site now sends data as **URL query parameters**, which survive the redirect. You **must re-deploy a NEW VERSION** of `js/google-apps-script.js` for this fix to take effect (Deploy → Manage deployments → ✏️ → New version → Deploy). |
| Sheet rows appear but admin shows empty | The admin only merges rows whose `id` is non-empty; ensure the header names match the list in step 1. |
| Did you edit the Apps Script after deploying? | Editing the script does **not** update the running Web App. You must **Deploy → Manage deployments → ✏️ → New version → Deploy**. The `/exec` URL stays the same. |
