# BLACK TRANSSIMO — Private Transfers & Tours in Marrakech

> Static luxury tourism website (HTML/CSS/JS, no build step) · 3 languages (EN/FR/AR) ·
> offline booking system · browser + Electron admin · cinematic hero video.
>
> **This README always reflects the real state of the code. Nothing is marked done unless it is implemented.**

---

## Where We Are Now

The site is fully built and functional (open `index.html` directly — no server needed).
Current focus: **replacing remote stock photography with the owner's own photos**, one
image at a time (each supplied as a clearly-named file on the Desktop, verified byte-for-byte
by MD5 hash before install — the tooling cannot view images).

**Most recent work (v2.13.1):** diagnosed a recipient-mapping bug — if the template’s
**To Email** is empty or fixed to the account Gmail, the owner receives BOTH copies
(admin + client) and the client gets nothing. The site code was correct; the template’s
**Settings → To Email must be exactly `{{to_email}}`** (now stressed in
`emailjs-template.html`). Before that (v2.13.0): a ready-to-paste EmailJS email template
model (`emailjs-template.html`) was created, adapted one-to-one to the booking form —
subject `{{subject}}`, destination `{{to_email}}`, reply-to `{{reply_to}}`, and a styled
body covering Customer / Journey / Schedule / Booking / Message. Before that (v2.12.0):
the old “M1” tab favicon was replaced by a PNG set generated from the owner’s square logo
(`img/logo.jpg` → `favicon-16/32/48/192/512.png` + `apple-touch-icon.png`); `favicon.svg`
deleted. Before that (v2.11.0): the admin views (`admin.html` and `electron/admin.html`)
are protected by a password lock (SHA-256 hash in `js/config.js`, per-tab session, manual
**Lock** button) — E2E-tested under Electron. Before that (v2.10.0): EmailJS configured
with the owner’s real credentials and **end-to-end delivery verified** (HTTP 200 → inbox);
the account’s strict mode was disabled so the browser SDK can send, and the
authorized-domains restriction should be used instead. Before that (v2.9.0): Phase 1
cleanup — all remaining “Mar-1 Travel” text (including Arabic “مار-1 ترافل” and the
Electron app) replaced with BLACK TRANSSIMO, the `bookLabel` “Book”-button bug
(`data-book="undefined"`) fixed, vehicle pre-selection repaired (Prado 4x4, Classe E),
booking validation hardened (passengers 1–15, return date ≥ departure), and Electron
statuses aligned (`declined` → `cancelled`).

### Status at a glance

| Area | Status |
|---|---|
| Website pages & design | 🟢 Completed |
| Multilingual EN/FR/AR + RTL | 🟢 Completed |
| Responsive / mobile layout | 🟢 Completed |
| Booking form + validation | 🟢 Completed |
| Bookings saved locally (`localStorage`) | 🟢 Completed |
| Rebrand consistency (AR text + Electron) | 🟢 Completed (v2.9.0) |
| Admin dashboard (browser, CSV export) | 🟢 Completed |
| Admin access lock (password) | 🟢 Completed (v2.11.0) |
| WhatsApp contact links | 🟢 Completed (live) |
| Hero background video | 🟢 Completed (visual QC pending) |
| Electron desktop admin | 🟡 In Progress (launch tested OK v31.7.7 — packaging pending) |
| Owner-photo replacement program | 🟡 In Progress (20 of ~56 content images swapped) |
| Browser-tab favicon | 🟢 Completed (v2.12.0 — PNG set from owner logo) |
| Low-resolution activity photos | ⚠️ Needs Attention (2 files soft) |
| Email notifications (EmailJS) | 🟢 Completed (v2.10.0 — configured & end-to-end tested) |
| EmailJS booking email template | 🟢 Model ready (v2.13.0/1 — paste `emailjs-template.html`; **To Email = `{{to_email}}`**) |
| Google Sheets / Excel sync | 🔴 Not Started |
| Payment system | 🔴 Not Started |
| Production deployment / domain | 🔴 Not Started |

---

## Project Objective

A luxury private tourist transportation website for **BLACK TRANSSIMO** (Marrakech,
Morocco): fleet showcase (Mercedes Vito, Sprinter, Skoda, Toyota Prado, Mercedes Classe E),
airport transfers, door-to-door transfers, day trips, destinations, activities, plus a
booking form and WhatsApp/email contact. Fully static — hostable anywhere, zero backend.

---

## Completed Features

1. Single-page responsive site: Hero, Services, Airport Transfers, Door-to-Door Transfers,
   Day Trips, Explore Morocco, Northern Morocco, Activities, Vehicles, Why Us, Booking, Contact.
2. 3 languages (EN/FR/AR) with RTL support (`js/translations.js`, `js/i18n-extra.js`).
3. Cinematic hero video (`video/hero-cinematic.mp4`, 53 s, 1080p30, loops).
4. Full rebrand Mar-1 Travel → **BLACK TRANSSIMO** (all visible text, emails, WhatsApp messages).
5. Owner’s logo (`img/logo.jpg`) in **header and footer** (header fixed in v2.7.0).
6. All public prices removed; JSON-LD `priceRange` = “Contact for pricing”.
7. Booking form: validation, `localStorage` persistence (`mar1_bookings`), pre-fill via
   `data-book` buttons, optional EmailJS send.
8. Admin page (`admin.html`): search, filter, status change, delete, clear, Export CSV.
9. Electron admin app (code complete): search, statuses, delete, clear, Export JSON.
10. Central config (`js/config.js`): WhatsApp number, company email, EmailJS credentials.
11. Password lock on both admin views (SHA-256, per-tab session, Lock button) —
    v2.11.0. Client-side deterrent; hosting-level auth recommended at deployment.
12. SEO basics: `sitemap.xml`, `robots.txt`, canonical + JSON-LD (domain placeholder);
    tab favicon = PNG set generated from the owner logo (v2.12.0).
13. Owner photography program (see detailed tables below) — **20 images installed so far**.

---

## Features Currently Being Worked On

- **Owner-photo replacement program** — swapping stock photos for the owner’s own images,
  section by section. Progress: Fleet 4/5 · Airport 4/6 · Door-to-Door 2/3 · Day Trips 1/6 ·
  Activities 7/28 · Services 2/8.
- **Electron desktop admin** — launch smoke-tested OK (v31.7.7, both windows load with preload);
  packaging into installers pending.
- **Hero video visual QC** — needs a human to watch it (tooling has no image input).

## Features Not Yet Started

- Google Sheets / Excel booking integration (no code exists).
- Payment system (booking form takes no payment).
- Production deployment + replacing the placeholder domain `www.mar1travel.com`
  (sitemap.xml, robots.txt, canonical/JSON-LD).
- Electron packaging into Windows/macOS installers.

---

## Pending Tasks

| # | Task | Priority |
|---|---|---|
| 1 | Continue supplying replacement photos (see tables below — 36 slots remain) | High |
| 2 | ~~Favicon~~ ✅ **done (v2.12.0)** — PNG set generated from the owner logo | Medium |
| 3 | ~~Configure EmailJS~~ ✅ **done (v2.10.0)** — optional live-form re-test | High |
| 4 | Replace low-res `activities/buggy.jpg` (259×194) and `activities/trekking.jpg` (450×220) with HD versions | Medium |
| 5 | ✅ Electron launch tested — package installers (`electron-builder`) | Medium |
| 6 | Watch/verify hero video pacing and grading | Low |
| 7 | Deploy to hosting; update domain in SEO files | When ready |

## Required Changes (waiting on owner)

- **Images:** 36 stock slots still need owner photos (exact list in the next section).
  Supply as clearly-named files on the Desktop (e.g. `casablanca.jpg`).

---

## Sections & Pages Modified (most recent first)

| Date | File / Section | Change |
|---|---|---|
| 2026-08-31 | `emailjs-template.html` | v2.13.1 EmailJS recipient fix: **To Email must be `{{to_email}}`** — empty/fixed field sends both copies to the owner and nothing to the client (documented) |
| 2026-08-31 | `emailjs-template.html`, `js/config.js` | v2.13.0 EmailJS template model: ready-to-paste booking email template adapted to the form (16 params, styled body, {{to_email}}/{{reply_to}}) |
| 2026-08-30 | `favicon-*.png`, `apple-touch-icon.png`, `index.html` header, `favicon.svg` | v2.12.0 favicon: PNG set from `logo.jpg` replaces old “M1” SVG (deleted) |
| 2026-08-30 | `admin.html`, `electron/admin.html`, `js/config.js` | v2.11.0 admin access lock: SHA-256 gate (overlay + session + Lock btn), E2E-tested |
| 2026-08-30 | `js/config.js`, `js/booking.js` | v2.10.0 EmailJS: real credentials wired, `init`/gate confirmed; end-to-end delivery tested (strict mode off, browser path) |
| 2026-08-30 | `js/*`, `electron/*`, `css/style.css` | v2.9.0 Phase 1 cleanup: AR + Electron rebrand leftovers, `bookLabel`/vehicle/validation fixes, status alignment (details in `version.md`) |
| 2026-08-24 | `index.html` :468 | Adventure Activities image → `img/activities/adventure.jpg` |
| 2026-08-24 | `index.html` :171 | Private Chauffeur image → `img/services/private-chauffeur.jpg` |
| 2026-08-24 | `index.html` :53 | Header brand mark: old CSS “M1” → `img/logo.jpg` (matches footer) |
| 2026-08-23 | `index.html` | Images: Custom Trips (:180); Buggy/Golf/Oasis/Cooking/Tea/Trekking activity cards; Agafay day trip (:339); Ourika/Agafay transfer cards; Tangier airport card |
| 2026-08-21 | `index.html` | Fleet photos: Prado, Skoda, Classe E, Vito; Airport Vito card |
| 2026-08-16 | `index.html` | Airport Sprinter + old-Skoda card photos |
| 2026-08-10 | all files | v2.0.0 rebrand + full price removal (details in `version.md`) |

Only `index.html` and `img/**` assets have changed since v2.0.0. `admin.html`, all JS,
and CSS are untouched by the photo program.

---

## Images & Media — Detailed Status

Legend: ✅ owner photo installed · ⬜ still stock/remote · ⚠️ low resolution

### Fleet (img/vehicles/) — 4 of 5 replaced
| Vehicle | Status |
|---|---|
| Mercedes Vito | ✅ `vito.jpg` |
| Mercedes Classe E | ✅ `classe-e.jpg` |
| Skoda | ✅ `skoda.jpg` |
| Toyota Prado | ✅ `prado.jpg` |
| Mercedes Sprinter | ⬜ original asset (never replaced) |

### Airport Transfers (img/transfers/) — 4 of 6 replaced
| Card | Status |
|---|---|
| Airport ⇄ City Center (Sprinter) | ✅ `airport-sprinter.jpg` |
| Airport ⇄ Hotel Outside City | ✅ `airport-skoda.jpg` |
| Hotels ≤10 km (Vito) | ✅ `airport-vito.jpg` |
| Marrakech ⇄ Tangier | ✅ `tangier.jpg` |
| Marrakech ⇄ Casablanca | ⬜ stock |
| Marrakech ⇄ Rabat | ⬜ stock |

### Door-to-Door Transfers — 2 of 3 replaced
| Card | Status |
|---|---|
| Ourika | ✅ `ourika.jpg` |
| Agafay | ✅ `agafay.jpg` |
| Imlil | ⬜ stock (Wikimedia) |

### Day Trips (img/trips/) — 1 of 6 replaced
| Card | Status |
|---|---|
| Agafay Desert | ✅ `agafay.jpg` |
| Essaouira · Ourika Valley · Imlil · Ouzoud · Ouarzazate | ⬜ stock (5 cards) |

### Activities (img/activities/) — 7 of 28 replaced
| Card | Status |
|---|---|
| Buggy | ✅ ⚠️ `buggy.jpg` only 259×194 — HD replacement advised |
| Adventure Activities | ✅ `adventure.jpg` |
| Moroccan Mint Tea | ✅ `tea.jpg` |
| Trekking | ✅ ⚠️ `trekking.jpg` only 450×220 — HD replacement advised |
| Moroccan Cooking | ✅ `cooking.jpg` |
| Golf | ✅ `golf.jpg` |
| Oasis Visits | ✅ `oasis.jpg` |
| Remaining 21 cards | ⬜ stock |

### Services (“Travel in Complete Comfort”, img/services/) — 2 of 8 replaced
| Card | Status |
|---|---|
| Private Chauffeur | ✅ `private-chauffeur.jpg` |
| Custom Trips | ✅ `custom-trips.jpg` |
| Airport Transfers · Private Transfers · Day Trips · Desert Tours · Intercity · Multi-Day Tours | ⬜ stock (6 cards) |

### Branding
| Item | Status |
|---|---|
| Logo — header | ✅ `img/logo.jpg` |
| Logo — footer | ✅ `img/logo.jpg` |
| Favicon | ✅ PNG set from `logo.jpg` (v2.12.0) |
| Hero video | ✅ compiled montage (human visual QC pending) |

Every installed image is verified byte-identical to the owner’s Desktop file via MD5 hash
before being referenced in the HTML.

---

## System Status Details

| System | Status | Notes |
|---|---|---|
| **Booking system** | 🟢 Working | Validates fields/dates, saves every request to `localStorage["mar1_bookings"]`, pre-fills via `data-book`. Works fully offline. |
| **Contact / WhatsApp** | 🟢 Live | Every WhatsApp link derives from `WHATSAPP_NUMBER` in `js/config.js`; messages pre-branded “BLACK TRANSSIMO”. |
| **Email integration** | 🟢 Configured & tested | Real EmailJS credentials in `js/config.js`; end-to-end delivery verified to `NEW_BOOKING_EMAIL` (v2.10.0). |
| **Payment system** | 🔴 Not started | None. Bookings are requests only; pricing handled privately. |
| **Multilingual** | 🟢 Complete | EN/FR/AR switcher, full dictionaries, RTL for Arabic, persisted choice (`mar1_lang`). |
| **Responsive/mobile** | 🟢 Complete | CSS media queries throughout; mobile hamburger nav; grid collapses correctly. |

---

## Known Issues / Bugs

1. **Electron installers not built** — the app itself launches fine (tested v31.7.7);
   packaging with `electron-builder` is still pending.
2. **Two low-res activity photos** — `buggy.jpg` (259×194), `trekking.jpg` (450×220);
   functional but visibly soft — replace when HD versions are available.
3. **Placeholder domain** — `www.mar1travel.com` still in sitemap/robots/canonical/JSON-LD
   (intentionally kept: also used as technical identifiers).
4. **Hero video rebuild not reproducible** — source clips live outside the repo (%TEMP%).
5. **Visual QA limits** — tooling cannot view images/video; all media verified by hash +
   metadata only. Human spot-checks recommended after each batch.

---

## Technical Notes

- **No build step.** Script order at the bottom of `index.html`:
  `emailjs CDN → config.js → translations.js → i18n-extra.js → destinations.js → booking.js → main.js → hero-video.js`.
- `main.js`: i18n engine (`data-i18n`), nav, modals, scroll reveal.
- `booking.js`: exposes `window.BOOKING`; owns validation, storage, EmailJS send.
- Both admin views read/write the same `localStorage["mar1_bookings"]` key.
- **Functional identifiers intentionally unchanged** (not branding): `window.MAR1_CONFIG`,
  `window.MAR1`, storage keys `mar1_bookings`/`mar1_lang`, CSV name `mar1-bookings.csv`.
- Photo workflow: owner drops a clearly-named file on the Desktop → copied to
  `img/<section>/<name>.jpg` → MD5-verified → only that `<img src>` edited → timestamp audit.
- PowerShell caveat: editing files containing `€` requires `[System.IO.File]::ReadAllText/
  WriteAllText` with UTF8 (plain `Get-Content` mangles it).

---

## Configuration (`js/config.js` → `window.MAR1_CONFIG`)

| Key | Meaning |
|---|---|
| `WHATSAPP_NUMBER` | Used by every WhatsApp link on the site. |
| `COMPANY_NAME` | Brand in email subjects (“BLACK TRANSSIMO”). |
| `NEW_BOOKING_EMAIL` | Inbox receiving booking requests (`merarwan064@gmail.com`). |
| `WEBSITE_URL` | Canonical URL (placeholder `www.mar1travel.com`). |
| `EMAILJS.*` | Configured (v2.10.0): Service/Template/Public Key set — emails active. Strict mode is off on the account (the browser SDK cannot sign strict-mode requests). |
| `ADMIN_PASSWORD_HASH` | SHA-256 (hex) of the admin password (v2.11.0). Generate with: `node -e "console.log(require('crypto').createHash('sha256').update('PASSWORD').digest('hex'))"`. Never store the plaintext. |

**EmailJS (configured — v2.10.0):** account wired with Service ID `service_eegyqme`,
Template ID `template_dux6pid` and the account Public Key in `js/config.js`. The template
must use exactly these parameters: `to_email, from_name, from_phone, from_email,
passengers, date, time, return_date, return_time, vehicle, service, pickup, destination,
message, reply_to, subject`. 📧 The ready-to-paste template model is in
**`emailjs-template.html`** (v2.13.0): subject `{{subject}}`, To Email `{{to_email}}`,
Reply-To `{{reply_to}}`, plus the full styled body. Security note: the dashboard
currently runs in **public-key mode** (strict mode disabled — the browser SDK
`@emailjs/browser@4.4.1` cannot sign strict-mode requests, verified in its source);
protect the account instead via the dashboard’s **authorized domains** list.

---

## Next Steps

1. Keep sending replacement photos — biggest gaps: **21 activity cards**, **6 service cards**,
   **5 day trips**, Casablanca/Rabat airport cards, Imlil transfer, Sprinter fleet photo.
2. ✅ Favicon done (v2.12.0) — PNG set from the owner logo.
3. ✅ EmailJS configured and tested end-to-end (v2.10.0) — optionally re-test from the live form.
4. Optionally supply HD replacements for `buggy.jpg` and `trekking.jpg`.
5. Run `cd electron && npm start` (launch verified) → package installers with `electron-builder`.
6. Deploy; then update the domain in `sitemap.xml`, `robots.txt`, canonical/JSON-LD.

---

*Full chronological change log: see [`version.md`](version.md).*
