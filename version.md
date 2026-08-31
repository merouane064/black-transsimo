# BLACK TRANSSIMO — Version History

> This log records the real state of the project at each step. Nothing is marked
> completed unless it is actually implemented in the code.
>
> Project type: static HTML/CSS/JS website + Electron desktop admin (no build step for the site).

---

## v2.14.2 — Fix: status/booking sync lost (POST body dropped by 302 redirect)

**Date:** 2026-08-31

### Symptom
- Admin Status changes showed in the panel but reset to **pending after a refresh**;
  bookings / status were never persisted to Google Sheets.

### Root cause (verified live against the deployed Web App)
- A Google Apps Script `/exec` URL answers a *write* with a **302 redirect** to
  `script.googleusercontent.com`. A browser/HTTP client following that redirect
  **drops the POST body**, so the script received an empty payload — it kept
  generating fresh ids (observed live: a `create` with an explicit `id` returned a
  *new* auto id) and could never update a status row.

### Fixed
- **All data is now sent as URL query parameters** (which survive the redirect)
  instead of a JSON POST body:
  - `js/booking.js` `syncToSheets()` → `?action=create&id=...&name=...&status=...`
  - `admin.html` & `electron/admin.html` status change →
    `?action=updateStatus&id=...&status=...`
- `js/google-apps-script.js` rewritten: both `doGet` and `doPost` route through a
  single `handle_()` that reads query parameters (`e.parameter`) as the primary
  source (JSON body still parsed as a fallback). Actions: `create`, `updateStatus`,
  or no action → return all bookings (admin refresh).

### Requires
- Re-deploy a **NEW VERSION** of the Apps Script from `js/google-apps-script.js`
  (Deploy → Manage deployments → ✏️ → New version → Deploy). The `/exec` URL is
  unchanged. Without this redeploy the running Web App still has the buggy code.

---

## v2.14.1 — Admin Status dropdown synced to Google Sheets

**Date:** 2026-08-31

### Problem
- Changing the Status dropdown on a booking (Pending / Confirmed / Cancelled)
  only updated the browser-local copy — **not** the Google Sheet, and not at all
  for bookings that came from Sheets (remote-only). Status was effectively not
  persistent/shared.

### Changed
- `js/google-apps-script.js` — `doPost_` now supports an **`action`** field:
  - `create` (default) → appends a booking row (unchanged);
  - `updateStatus` → finds the row by `id` and sets its `status` column
    (validates the status value; errors if the row or `id`/`status` headers are
    missing).
- `admin.html` — `setStatus()` now updates the local copy **and** POSTs
  `{ action: "updateStatus", id, status }` to the Web App when the booking is
  remote(Sheets). The in-memory remote list is updated so the UI reflects the
  change instantly.
- `electron/admin.html` — `updateStatus()` likewise pushes the status to the
  Sheet when the booking came from it.
- All status changes are best-effort: the local UI always updates; the sheet
  write happens in the background.

### Requires
- Re-deploying a **new version** of the Apps Script from `js/google-apps-script.js`
  for the `updateStatus` action to exist on the running Web App.

---

## v2.14.0 — Google Sheets booking sync (admin never seeing bookings — fixed)

**Date:** 2026-08-31

### Problem diagnosed
- The site is fully static (zero backend). Bookings were saved to the **visitor's
  own browser** `localStorage` and emailed via EmailJS — so the owner always got the
  email but the **admin panel stayed empty**: it only reads the browser it runs in
  (see `admin.html` note: "Open this page on the same device used to receive bookings").

### Added
- `js/google-apps-script.js` — a Google Apps Script **Web App** that gives every booking
  a shared, always-visible home:
  - `doPost` appends a booking to the sheet's `Bookings` tab;
  - `doGet` returns all bookings as JSON (newest first) for the admin panel.
- `google-apps-script-setup.md` — step-by-step deployment guide (sheets.new → Apps
  Script → paste code → Deploy as Web App → paste `/exec` URL into config).

### Changed
- `js/config.js` — new `SHEETS.endpoint` key (empty by default → sync disabled until
  you paste the Web App URL from the setup guide).
- `js/booking.js` — `syncToSheets()` POSTs the enriched booking (id/created/status)
  to the Web App right after `saveLocal()`. **Best-effort, never blocking**: if the
  endpoint is empty or the request fails, the booking still saves locally and the
  email still goes out.
- `admin.html` — on unlock it fetches the sheet bookings and **merges** them with
  local ones (deduped by `id`, local wins on status), plus a sync-status note.
- `electron/admin.html` — same fetch + merge on unlock and on Refresh.

### Notes
- Not live yet: the code is ready, but deploying requires the one-time Google setup
  (create the Sheet + Web App) and pasting `SHEETS.endpoint`. Until then emails and
  local storage behave exactly as before.
- This is a **write-public** Web App; suitable for collecting bookings but not for
  storing secrets. A token check can be added in `doPost_` if stricter control is
  ever needed.

---

## v2.13.1 — EmailJS recipient mapping fix (current)

**Date:** 2026-08-31

### Fixed / Documented
- Diagnosis: when the template’s **To Email** setting is empty or hard-coded to the
  account Gmail, EmailJS delivers EVERY send to that default inbox — the owner then
  receives BOTH the admin copy and the client copy, while the client gets nothing.
  The site code was correct (two sends: admin → `NEW_BOOKING_EMAIL`, client →
  customer email).
- `emailjs-template.html`: **To Email must be exactly `{{to_email}}`** — requirement now
  emphasized in the embedded setup instructions (Settings tab).

---

## v2.13.0 — EmailJS booking email template model

**Date:** 2026-08-31

### Added
- `emailjs-template.html`: ready-to-paste EmailJS email template adapted to the booking
  form — subject `{{subject}}`, destination `{{to_email}}`, reply-to `{{reply_to}}`, and
  a full styled body (Customer / Journey / Schedule / Booking / Message sections) using
  the 16 parameters sent by `js/booking.js`. Setup instructions embedded in the file.

### Changed
- `js/config.js` setup comment now points to `emailjs-template.html`.

---

## v2.12.0 — Favicon replaced with owner-logo PNG set

**Date:** 2026-08-30

### Changed
- `index.html` `<head>` now declares PNG icons generated from the owner’s square logo
  (`img/logo.jpg`, 1254×1254): `favicon-16/32/48.png`, `apple-touch-icon.png` (180),
  `favicon-192.png`, `favicon-512.png`.

### Removed
- `favicon.svg` (old “M1” mark) — deleted; its `<link rel="icon">` entry replaced.

---

## v2.11.0 — Admin access lock

**Date:** 2026-08-30

### Added
- **Password lock on the admins** (`admin.html` and `electron/admin.html`): a SHA-256-gated
  unlock panel covers the page until the right password is entered. The hash lives in
  `js/config.js` (`ADMIN_PASSWORD_HASH`) — the plaintext password is never stored.
  The session is kept in `sessionStorage` (`mar1_admin_session`, cleared on tab close) and
  a **Lock** button in each toolbar re-locks manually.
- Both admins load the shared config (`js/config.js`) and unlock via WebCrypto
  `crypto.subtle` (works from `file://`).

### Notes
- This is a **client-side deterrent** (casual/script access), not full security: the hash
  ships with the page and `localStorage` bookings are still readable via dev tools.
  For real protection, add hosting-level auth (Cloudflare Access / `.htaccess`) at
  deployment (Phase 4).

### Tested
- E2E under Electron: lock shown on load → correct password unlocks → **Lock** re-locks.
  Verified on both admin views.

---

## v2.10.0 — EmailJS configured; end-to-end delivery verified

**Date:** 2026-08-30

### Added
- Real EmailJS credentials in `js/config.js` (`SERVICE_ID: service_eegyqme`,
  `TEMPLATE_ID: template_dux6pid`, `PUBLIC_KEY`) — booking emails are now live.
  The `EMAILJS` gate in `js/booking.js` therefore exits “unconfigured” mode.

### Decided
- **Strict mode disabled on the account.** The browser SDK `@emailjs/browser@4.4.1`
  (the version loaded by `index.html`) cannot sign strict-mode requests — verified in its
  source (`init`/`send` never forward `privateKey`) and live (403 “no Private Key was
  provided” until the dashboard toggle was turned off). The site uses the standard
  public-key path, as originally designed. The account should be protected via the
  dashboard **authorized domains** list instead.
- Receiver inbox confirmed: `NEW_BOOKING_EMAIL` → `merarwan064@gmail.com`.

### Tested
- End-to-end send through the EmailJS API using the exact `booking.js` parameters
  (public-key only): **HTTP 200** — email delivered to `merarwan064@gmail.com`
  (subject “New Booking Request – BLACK TRANSSIMO – Public-key test”).

---

## v2.9.0 — Phase 1 cleanup: rebrand leftovers + booking fixes

**Date:** 2026-08-30

### Changed
- **Arabic brand consistency** (`js/translations.js`): all remaining "Mar-1 Travel"
  ("مار-1 ترافل") copy replaced with BLACK TRANSSIMO ("بلاك ترانسيمو") —
  keys `trips.sub`, `why.title`, `form.note`, `contact.wa`.
- **Electron rebrand** (`electron/main.js`, `electron/admin.html`,
  `electron/package.json`): window titles, admin header/title and package name now use
  BLACK TRANSSIMO.
- **Comment cleanup** (`css/style.css`, `js/hero-video.js`): removed the old
  "MAR-1 TRAVEL" / "slideshow" comments; the single-video hero is now documented.

### Fixed
- **Destination modal book button** (`js/main.js`): `renderDestModal()` previously
  emitted `data-book="undefined"` (the `bookLabel` field was removed in v2.0.0), so
  booking from any "View Details" modal pre-filled the destination as "undefined".
  The label is now rebuilt from the data: `"Day Trip – <EN name>"` for trips,
  `"Explore Morocco – <EN name>"` for explore destinations.
- **Vehicle pre-selection** (`js/booking.js`): "Toyota Prado" now matches the
  "Toyota Prado (4x4)" option and "Mercedes Classe E" now matches "Mercedes E-Class",
  via label normalization + alias (the Classe E pre-fill previously failed silently).
- **Booking validation** (`js/booking.js`): `passengers` must be 1–15 (previously
  unchecked because the form is `novalidate`), and `returnDate` must not be before
  `date`. New localized messages (`form.err.passengers`, `form.err.returndate`)
  added to EN/FR/AR in `js/i18n-extra.js`.
- **Admin statuses unified** (`electron/admin.html`): "declined" → "cancelled" to
  match the browser admin (`admin.html`).

### Removed
- Unused `airport.group` translation keys (EN/FR/AR) in `js/i18n-extra.js`.

---

## v2.8.0 — Adventure Activities image

**Date:** 2026-08-24

### Changed
- “Moroccan Experiences & Activities” → **Adventure Activities** card (`index.html:468`):
  Unsplash stock photo → owner’s `img/activities/adventure.jpg` (704×435, MD5 `290A6C5BF685`,
  byte-identical to Desktop `adventure.jpg`). Alt text, label, layout untouched.

---

## v2.7.0 — Private Chauffeur image + header logo fix

**Date:** 2026-08-24

### Changed
- Services (“Travel in Complete Comfort”) → **Private Chauffeur** card (`index.html:171`):
  stock photo → owner’s `img/services/private-chauffeur.jpg` (678×452, MD5 `5618308B69E0`).
- **Header brand mark fixed** (`index.html:53`): an earlier replaceAll had only matched the
  footer’s single-line markup, leaving the old CSS text logo “M1” in the header. Header now
  uses `img/logo.jpg`, identical markup to the footer. No old “M1” text remains in the HTML.

---

## v2.6.0 — Custom Trips service image

**Date:** 2026-08-23

### Changed
- Services → **Custom Trips** card (`index.html:180`): stock photo → owner’s
  `img/services/custom-trips.jpg` (MD5 `0149797CD245`).

---

## v2.5.0 — Six activity images

**Date:** 2026-08-23

### Changed
- Activities grid — six cards switched from stock to owner photos (`img/activities/`):
  Buggy (`buggy.jpg`, ⚠️ 259×194 low-res), Golf (`golf.jpg`), Oasis Visits (`oasis.jpg`),
  Moroccan Cooking (`cooking.jpg` — updated twice; final source `tagin.jpeg`),
  Moroccan Tea (`tea.jpg`), Trekking (`trekking.jpg`, ⚠️ 450×220 low-res).
- All other 22 activity cards remain stock.

---

## v2.4.0 — Agafay day trip image

**Date:** 2026-08-23

### Changed
- Day Trips → **Agafay Desert** card: stock photo → owner’s `img/trips/agafay.jpg`
  (same Desktop source as the door-to-door Agafay transfer card). Other five trips stock.

---

## v2.3.0 — Transfer cards: Tangier, Ourika, Agafay

**Date:** 2026-08-23

### Changed
- Airport Transfers → **Marrakech ⇄ Tangier** card: stock → `img/transfers/tangier.jpg`.
- Door-to-Door Transfers → **Ourika** card: Wikimedia stock → `img/transfers/ourika.jpg`;
  **Agafay** card: stock → `img/transfers/agafay.jpg`.
- Remaining stock in transfers: Casablanca, Rabat (airport) and Imlil (door-to-door).

---

## v2.2.0 — Fleet vehicle photos replaced

**Date:** 2026-08-21

### Changed
- Vehicles section fleet photos swapped for owner uploads (`img/vehicles/`):
  Toyota Prado (`prado.jpg`), Skoda (`skoda.jpg`), Mercedes Classe E (`classe-e.jpg`),
  Mercedes Vito (`vito.jpg` — also reused for the Airport “Hotels ≤10 km” card,
  `img/transfers/airport-vito.jpg`).
- Sprinter fleet photo intentionally unchanged (original asset).

---

## v2.1.0 — Airport transfer imagery begins

**Date:** 2026-08-16

### Changed
- Airport Transfers → card 1 (**Airport ⇄ City Center**, Sprinter): stock → owner’s
  `img/transfers/airport-sprinter.jpg`.
- Airport Transfers → card 2 (**Airport ⇄ Hotel Outside City**): stock photo of the new
  Skoda → owner’s older Skoda photo `img/transfers/airport-skoda.jpg`.

---

## v2.0.0 — Rebrand to BLACK TRANSSIMO + prices removed

**Date:** 2026-08-10

### Added
- Logo image (`img/logo.jpg`) uploaded by the site owner, replacing the old CSS "M1" brand mark.

### Changed
- **Full rebrand** from "Mar-1 Travel" to **BLACK TRANSSIMO** across every file:
  - `index.html`, `admin.html`, `js/translations.js`, `js/config.js`, `js/booking.js`,
    `js/i18n-extra.js`, `js/main.js`, `js/destinations.js`, `js/hero-video.js`.
  - WhatsApp URL-encoded welcome messages updated.
  - JSON-LD `name` updated; `priceRange` set to "Contact for pricing".
  - Header and footer brand mark replaced with `<img>` of the new logo.
- **All prices removed** from the public website:
  - Removed `price-tag` spans from airport transfer cards (6) and door-to-door transfer cards (3).
  - Removed `trip-price` spans from day trip cards (6).
  - Removed prices from all `data-book` button attributes.
  - Removed the "Estimated Price" hint section from the booking form.
  - Removed the booking fee note.
  - Removed `PRICE_ROUTES`, `AIRPORT_LOCAL_PRICES`, and `BOOKING_FEE_USD` from `js/config.js`.
  - Removed `updatePriceHint()`, `initPriceHint()`, `updateFeeNote()` and `modal-price` logic from `js/main.js`.
  - Removed all `form.price.*` and `booking.fee` translations from `js/i18n-extra.js`.
  - Updated `trips.notice` text in EN/FR/AR to remove price references.
  - Removed orphaned CSS (`.price-tag`, `.trip-price`, `.price-hint`, `.fee-note`, `.modal-price`).
  - Removed `price` and `bookLabel` fields from destination data in `js/destinations.js`.

### Still pending
- Human visual QA of the montage.
- EmailJS configuration.
- Node.js installation for Electron testing.
- Production domain deployment.

---

## v1.1.0 — Cinematic hero background video

**Date:** 2026-08-10

### Added
- `video/hero-cinematic.mp4` — a 53-second compiled cinematic hero background
  (1920×1080, 30 fps, H.264 `yuv420p`, `+faststart`, ~32 MB, silent, loops without an end fade).
- Hero now plays the single compiled file; `index.html` hero block reduced to one
  `<video class="hero-video is-active" autoplay muted loop playsinline>` element.
- `version.md` (this file) and the project-status README section.

### Changed
- Hero background switched from the earlier 6-video Mixkit crossfade list to one
  locally compiled montage. Site interface unchanged — video is background-only.

---

## v1.0.1 — Switched hero to a transport concept montage

**Date:** 2026-08-10

### Changed
- Replaced the 6 tourism Pexels hero clips with a verified Mixkit set matching the
  "premium, safe, private transport" concept (no faces, no plates, calm driving).

---

## v1.0.0 — Original website build (baseline)

**Date:** before 2026-08-10

### Added
- Single-page website (`index.html`) with all sections.
- Dark/gold luxury design, responsive, RTL-ready.
- 3-language i18n (EN/FR/AR).
- Booking form with validation, localStorage persistence, EmailJS send logic.
- Browser admin (`admin.html`): search, status filter, CSV export.
- Electron desktop app (`electron/`).
- Central config `js/config.js`.
- Hero video slideshow (`hero-video.js`).
- SEO files: favicon PNG set, `robots.txt`, `sitemap.xml`, canonical/JSON-LD.

---

## Planned / Unreleased

- **v2.15.0** — Package the Electron admin into installers (launch already smoke-tested v31.7.7).
- **v2.16.0** — Production deployment + domain update (sitemap/robots/canonical/JSON-LD).
- Ongoing — owner-photo replacement program: 36 stock slots remain
  (21 activities · 6 services · 5 day trips · 2 airport cards · Imlil transfer · Sprinter fleet photo),
  plus optional HD re-swaps for `buggy.jpg` and `trekking.jpg`.

### v2.14.0 follow-up (activate Sheets sync)
- The code is merged; to make it live, follow `google-apps-script-setup.md` and paste
  the `/exec` URL into `SHEETS.endpoint` in `js/config.js`. (Originally planned as a
  separate "v2.15.0 Google Sheets sync" — now moved up and implemented as v2.14.0.)
