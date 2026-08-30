/* BLACK TRANSSIMO — main.js (i18n engine, navigation, modals, reveal) */
/* eslint-disable */
window.MAR1 = (function () {

  var LS_KEY = "mar1_lang";
  var currentLang = "en";

  function getLang() { return currentLang; }

  function t(key) {
    var dict = window.I18N ? (window.I18N[currentLang] || window.I18N.en) : {};
    return dict[key] || key;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function normalizeText(s) {
    return String(s || "").toLowerCase()
      .replace(/[àâäáãå]/g, "a")
      .replace(/[éèêë]/g, "e")
      .replace(/[îïíì]/g, "i")
      .replace(/[ôöòóõ]/g, "o")
      .replace(/[ûüùú]/g, "u")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9 .-]/g, " ");
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-placeholder"));
      if (val) el.setAttribute("placeholder", val);
    });
    var svc = document.getElementById("bService");
    if (svc) {
      Array.prototype.forEach.call(svc.options, function (opt, i) {
        opt.textContent = t(i === 0 ? "form.service.ph" : "form.service.opt" + i);
      });
    }
  }

  function renderTags() {
    document.querySelectorAll(".trip-tags[data-tags]").forEach(function (container) {
      var key = container.getAttribute("data-tags");
      var dest = window.DEST_DATA && window.DEST_DATA.data[key];
      container.innerHTML = "";
      if (!dest) return;
      var tags = dest.tags[currentLang] || dest.tags.en || [];
      tags.forEach(function (tag) {
        var s = document.createElement("span");
        s.textContent = tag;
        container.appendChild(s);
      });
    });
  }

  function renderNorthChips() {
    var chips = document.getElementById("northChips");
    if (!chips) return;
    chips.innerHTML = "";
    var list = window.DEST_DATA && window.DEST_DATA.northChips;
    if (!list) return;
    (list[currentLang] || list.en || []).forEach(function (c) {
      var s = document.createElement("span");
      s.textContent = c;
      chips.appendChild(s);
    });
  }

  function renderDestModal(key) {
    var data = window.DEST_DATA;
    if (!data || !data.data[key]) return;
    var dest = data.data[key];
    var name = (data.names[key] && data.names[key][currentLang]) || key;
    var content = dest.content[currentLang] || dest.content.en;
    var bookLabel = (dest.kind === "explore" ? "Explore Morocco – " : "Day Trip – ") + ((data.names[key] && data.names[key].en) || key);

    var img = document.getElementById("modalImg");
    if (img) { img.src = dest.image; img.alt = name; }

    var body = document.getElementById("modalBody");
    if (!body) return;

    var html = '<h2>' + escapeHtml(name) + '</h2>';
    html += '<p>' + escapeHtml(content.intro) + '</p>';

    (content.sections || []).forEach(function (sec) {
      html += '<h3>' + escapeHtml(sec.title) + '</h3><ul>';
      (sec.items || []).forEach(function (item) {
        html += '<li>' + escapeHtml(item) + '</li>';
      });
      html += '</ul>';
    });

    if (content.transport) {
      html += '<p class="modal-transport">' + escapeHtml(content.transport) + '</p>';
    }
    html += '<div class="modal-actions">';
    html += '<button type="button" class="btn btn-gold" data-book="' + escapeHtml(bookLabel) + '">' + escapeHtml(t("common.book")) + '</button>';
    html += '<button type="button" class="btn btn-ghost" data-close>' + escapeHtml(t("success.close")) + '</button>';
    html += '</div>';

    body.innerHTML = html;
  }

  function openModal(id) {
    var m = document.getElementById(id);
    if (!m) return;
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModals() {
    document.querySelectorAll(".modal.open").forEach(function (m) {
      m.classList.remove("open");
      m.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "";
  }

  function setLang(lang) {
    var next = window.I18N && window.I18N[lang] ? lang : "en";
    currentLang = next;
    var html = document.documentElement;
    html.setAttribute("lang", next);
    html.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
    try { window.localStorage.setItem(LS_KEY, next); } catch (e) {}
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === next);
    });
    applyTranslations();
    renderTags();
    renderNorthChips();
    var open = document.querySelector(".modal.open");
    if (open && open.id === "destModal") {
      var key = open.getAttribute("data-dest");
      if (key) renderDestModal(key);
    }
  }

  function initLang() {
    var saved = null;
    try { saved = window.localStorage.getItem(LS_KEY); } catch (e) {}
    setLang(saved || "en");
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initHeader() {
    var header = document.getElementById("siteHeader");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.addEventListener("click", function (ev) {
        if (ev.target.tagName === "A") {
          nav.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function initModals() {
    document.addEventListener("click", function (ev) {
      var opener = ev.target.closest("[data-open]");
      if (opener) {
        var key = opener.getAttribute("data-open");
        var m = document.getElementById("destModal");
        if (m) m.setAttribute("data-dest", key);
        renderDestModal(key);
        openModal("destModal");
        ev.preventDefault();
        return;
      }
      if (ev.target.closest("[data-close]")) {
        closeModals();
      }
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeModals();
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function initMisc() {
    var dateEl = document.getElementById("bDate");
    if (dateEl) {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var dd = String(today.getDate()).padStart(2, "0");
      dateEl.min = yyyy + "-" + mm + "-" + dd;
    }
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function rewriteWhatsApp() {
    var cfg = window.MAR1_CONFIG;
    if (!cfg || !cfg.WHATSAPP_NUMBER) return;
    var num = String(cfg.WHATSAPP_NUMBER).replace(/^\+/, "");
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
      try {
        var u = new URL(a.href);
        u.host = "wa.me";
        u.pathname = "/" + num;
        a.href = u.toString();
      } catch (e) {}
    });
  }

  function init() {
    initLang();
    initHeader();
    initModals();
    initReveal();
    initMisc();
    rewriteWhatsApp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return { getLang: getLang, t: t };
})();
