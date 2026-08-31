/* ============================================================
   BLACK TRANSSIMO - CENTRAL CONFIGURATION
   This is the ONLY place where the site owner must set:
   1) WhatsApp number
   2) EmailJS credentials (required to receive booking emails)

   Everything on the website reads from this file:
   - All WhatsApp links (header, hero, booking, contact, footer)
   - Booking form emails (js/booking.js)
   ============================================================ */

/* === HOW TO SET UP EMAILJS (5 minutes) ===
   1) Create a free account at https://www.emailjs.com
   2) Go to "Email Services" > "Add New Service" > pick Gmail,
      connect your Gmail and copy the "Service ID".
   3) Go to "Email Templates" > open the template (TEMPLATE_ID) and edit it
      with the ready-made model in `emailjs-template.html` (subject {{subject}},
      To Email {{to_email}}, Reply-To {{reply_to}}, plus the body HTML). That
      model matches the 16 parameters below one-to-one.
        from_name, from_email, from_phone, passengers,
        date, time, return_date, return_time, vehicle,
        service, pickup, destination, message, subject,
        reply_to, to_email
   4) Copy the "Template ID" and your "Public Key"
      (Account > General) and paste all three values below.
   ============================================================ */

window.MAR1_CONFIG = {

  /* ---------- WHATSAPP (used for every WhatsApp link on the site) ---------- */
  WHATSAPP_NUMBER: "212660116849",

  /* ---------- COMPANY ---------- */
  COMPANY_NAME: "BLACK TRANSSIMO",
  NEW_BOOKING_EMAIL: "meromarwan064@gmail.com",
  WEBSITE_URL: "https://www.mar1travel.com",

  /* ---------- ADMIN SECURITY ---------- */
  /* SHA-256 (hex, lowercase) of the password required to open admin.html /
     electron/admin.html. Generate it with Node:
       node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"
     Keep the hash only — never store the plaintext password here.         */
  ADMIN_PASSWORD_HASH: "c819b3a58dc30baca65dc1dc2dce029ce521b5e69a26ebf0d680b9d4410590bc",

  /* ---------- EMAILJS (configured values) ---------- */
  EMAILJS: {
    SERVICE_ID: "service_eegyqme",
    TEMPLATE_ID: "template_dux6pid",
    PUBLIC_KEY: "m3SixP2dMU52uEe_Y"
  },

  /* ---------- GOOGLE SHEETS SYNC (see google-apps-script-setup.md) ---------- */
  /* Paste the Apps Script Web App /exec URL here (deployed from
     js/google-apps-script.js). Bookings are POSTed here on submit, and the admin
     panel reads them back, so reservations survive the visitor's browser.
     Leave empty ("") to disable sync — emails + local storage still work.   */
  SHEETS: {
    endpoint: "https://script.google.com/macros/s/AKfycbwb-Yy1_sY_vBaUqfZUbb4Qgy05m8f3oTKplEGVi5Suh2o_t4qE5xSk3oltGYrtzrSt/exec"
  }
};
