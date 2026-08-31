/* BLACK TRANSSIMO - Booking (validation, EmailJS, local storage)
   All credentials come from js/config.js (window.MAR1_CONFIG). */
/* eslint-disable */
window.BOOKING = (function () {

  var CFG = window.MAR1_CONFIG || {};

  var STORAGE_KEY = "mar1_bookings";
  var lang = function () {
    return (document.documentElement.getAttribute("lang")) ||
           window.localStorage.getItem("mar1_lang") || "en";
  };
  var t = function (key) {
    var dict = window.I18N ? (window.I18N[lang()] || window.I18N.en) : {};
    return dict[key] || key;
  };

  function saveLocal(booking) {
    var list = [];
    try {
      list = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) { list = []; }
    booking.id = "BK" + Date.now();
    booking.created = new Date().toISOString();
    booking.status = "pending";
    list.unshift(booking);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function getLocal() {
    try { return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }

  function isEmailValid(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
  function isPhoneValid(phone) { return /^[+0-9 ()-]{8,20}$/.test(phone); }

  function readForm() {
    var v = function (id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    };
    return {
      name: v("bName"),
      phone: v("bPhone"),
      email: v("bEmail"),
      passengers: v("bPassengers"),
      date: v("bDate"),
      time: v("bTime"),
      returnDate: v("bReturnDate"),
      returnTime: v("bReturnTime"),
      vehicle: v("bVehicle"),
      service: v("bService"),
      pickup: v("bPickup"),
      destination: v("bDestination"),
      message: v("bMessage")
    };
  }

  function validate(b) {
    if (!b.name || !b.phone || !b.date || !b.service || !b.pickup || !b.destination) {
      return t("form.err.required");
    }
    if (b.email && !isEmailValid(b.email)) return t("form.err.email");
    if (!isPhoneValid(b.phone)) return t("form.err.phone");
    var pax = parseInt(b.passengers, 10);
    if (isNaN(pax) || pax < 1 || pax > 15) return t("form.err.passengers");
    if (b.date) {
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var chosen = new Date(b.date + "T00:00:00");
      if (chosen < today) return t("form.err.date");
    }
    if (b.returnDate && b.date && b.returnDate < b.date) return t("form.err.returndate");
    return "";
  }

  function setStatus(msg, isError) {
    var el = document.getElementById("formStatus");
    if (!el) return;
    el.textContent = msg;
    el.className = "form-status" + (isError ? " error" : " success");
    if (msg) el.style.display = "block";
    else el.style.display = "";
  }

  function openModal(id) {
    var m = document.getElementById(id);
    if (m) { m.classList.add("open"); m.setAttribute("aria-hidden", "false"); }
  }

  /* Returns a Promise resolving to:
     "sent"        - EmailJS delivered (configured + succeeded)
     "unconfigured"- EmailJS placeholders still set (demo mode)
     "error"       - EmailJS configured but the send failed     */
  function sendViaEmailJS(b) {
    if (!window.emailjs) return Promise.resolve("unconfigured");
    var ej = CFG.EMAILJS || {};
    var sid = ej.SERVICE_ID || "", tid = ej.TEMPLATE_ID || "", pk = ej.PUBLIC_KEY || "";
    if (sid.indexOf("YOUR_") === 0 || tid.indexOf("YOUR_") === 0 || pk.indexOf("YOUR_") === 0) {
      return Promise.resolve("unconfigured");
    }
    emailjs.init(pk);
    var base = {
      from_name: b.name,
      from_phone: b.phone,
      from_email: b.email || "not provided",
      passengers: b.passengers,
      date: b.date,
      time: b.time || "\u2014",
      return_date: b.returnDate || "\u2014",
      return_time: b.returnTime || "\u2014",
      vehicle: b.vehicle || "\u2014",
      service: b.service,
      pickup: b.pickup,
      destination: b.destination,
      message: b.message || "\u2014",
      reply_to: b.email || CFG.NEW_BOOKING_EMAIL || "meromarwan064@gmail.com"
    };

    var jobs = [];

    var adminParams = Object.assign({}, base, {
      to_email: CFG.NEW_BOOKING_EMAIL || "meromarwan064@gmail.com",
      subject: "New Booking Request \u2013 " + (CFG.COMPANY_NAME || "BLACK TRANSSIMO") + " \u2013 " + b.name + " \u2013 " + b.destination
    });
    jobs.push(emailjs.send(sid, tid, adminParams));

    if (b.email && isEmailValid(b.email)) {
      var clientParams = Object.assign({}, base, {
        to_email: b.email,
        subject: "Your booking request \u2013 " + (CFG.COMPANY_NAME || "BLACK TRANSSIMO")
      });
      jobs.push(emailjs.send(sid, tid, clientParams));
    }

    return Promise.all(jobs).then(
      function () { return "sent"; },
      function () { return "error"; }
    );
  }

  /* Best-effort push of a booking to the Google Sheets Web App (configured via
     CFG.SHEETS.endpoint). Never blocks the user flow: resolves quietly whether
     it succeeded or not. */
  function syncToSheets(booking) {
    var endpoint = (CFG.SHEETS && CFG.SHEETS.endpoint) || "";
    if (!endpoint || endpoint.indexOf("/exec") === -1) {
      return Promise.resolve();
    }
    var payload = {
      id: booking.id,
      created: booking.created,
      status: booking.status,
      name: booking.name,
      phone: booking.phone,
      email: booking.email || "",
      passengers: booking.passengers,
      date: booking.date,
      time: booking.time || "",
      returnDate: booking.returnDate || "",
      returnTime: booking.returnTime || "",
      vehicle: booking.vehicle || "",
      service: booking.service,
      pickup: booking.pickup,
      destination: booking.destination,
      message: booking.message || ""
    };
    return fetch(endpoint, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    }).then(function () {}, function () {});
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    var b = readForm();
    var err = validate(b);
    if (err) {
      setStatus(err, true);
      var firstErr = document.querySelector("#bookingForm [required]:invalid");
      if (firstErr) firstErr.focus();
      return;
    }

    var btn = document.getElementById("submitBtn");
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = t("form.sending");
    setStatus("", false);

    sendViaEmailJS(b).then(function (result) {
      btn.disabled = false;
      btn.textContent = original;
      if (result === "error") {
        setStatus(t("form.err.send"), true);
        return;
      }
      saveLocal(b);
      syncToSheets(b);
      document.getElementById("bookingForm").reset();
      document.getElementById("bPassengers").value = "2";
      setStatus("", false);
      openModal("successModal");
    });
  }

  /* Normalizes vehicle labels for matching (e.g. "Toyota Prado (4x4)" = "toyotaprado").
     "Mercedes Classe E" (button) and "Mercedes E-Class" (option) resolve through the alias. */
  function normVehicle(v) {
    return String(v || "").toLowerCase().replace(/4\s*x\s*4/g, " ").replace(/[^a-z0-9]/g, "");
  }
  var VEHICLE_ALIAS = { mercedesclassee: "mercedeseclass" };

  function prefillFromBook(label) {
    var service = document.getElementById("bService");
    var destination = document.getElementById("bDestination");
    var message = document.getElementById("bMessage");
    var vehicle = document.getElementById("bVehicle");

    if (label.indexOf("Airport") !== -1) service.value = "Airport Transfer";
    else if (label.indexOf("Vehicle") !== -1) service.value = "Other";
    else if (label.indexOf("Day Trip") !== -1 || label.indexOf("Explore") !== -1) service.value = label.indexOf("Day Trip") !== -1 ? "Day Trip" : "Explore Morocco";
    else service.value = "Private Transfer";

    if (label.indexOf("Vehicle \u2013") !== -1) {
      var name = label.split("\u2013")[1];
      if (name) {
        name = name.trim();
        if (vehicle) {
          var match = null;
          var normName = normVehicle(name);
          var alias = VEHICLE_ALIAS[normName];
          if (alias) normName = alias;
          Array.prototype.forEach.call(vehicle.options, function (opt) {
            if (normVehicle(opt.value) === normName) match = opt.value;
          });
          if (match) vehicle.value = match;
        }
        if (destination) destination.value = "";
      }
      if (message) message.value = "Booking request: " + label;
    } else {
      if (destination) destination.value = label;
      if (message) message.value = "Booking request: " + label;
    }

    var head = document.getElementById("booking");
    if (head) head.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function () {
      var first = document.querySelector("#bookingForm input:not([type=hidden])");
      if (first) first.focus();
    }, 600);
  }

  function init() {
    document.addEventListener("click", function (ev) {
      var btn = ev.target.closest("[data-book]");
      if (btn) prefillFromBook(btn.getAttribute("data-book"));
    });

    var form = document.getElementById("bookingForm");
    if (form) form.addEventListener("submit", handleSubmit);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return {
    getLocal: getLocal,
    saveLocal: saveLocal,
    STORAGE_KEY: STORAGE_KEY,
    config: CFG
  };
})();
