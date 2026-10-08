/* ReadMeHub design preview — minimal isolated JS.
   Theme toggle + persistence, mobile menu, and preview-only form handlers.
   The WordPress build keeps only the theme toggle (~15 lines) as custom JS
   (exception E1); menu/forms use native/free plugin capabilities there. */

(function () {
  "use strict";

  /* --- theme toggle (spec §13 / exception E1) --- */
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function paintToggle() {
    if (!toggle) return;
    var dark = currentTheme() === "dark";
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    var label = toggle.querySelector("[data-toggle-label]");
    if (label) label.textContent = dark ? "Light" : "Dark";
    var sr = toggle.querySelector("[data-toggle-action]");
    if (sr) sr.textContent = dark ? "Switch to light mode" : "Switch to dark mode";
  }

  if (toggle) {
    paintToggle();
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("rmh-theme", next); } catch (e) {}
      paintToggle();
    });
  }

  /* --- mobile menu (aria-expanded, Escape, focus return) --- */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.getElementById("mobile-nav");

  function setMenu(open) {
    if (!menuBtn || !mobileNav) return;
    mobileNav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* --- preview-only forms (no data is sent anywhere) --- */
  document.querySelectorAll("[data-preview-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "Preview only — this form is not connected yet.";
      }
    });
  });
})();
