// Navbar behaviour: theme toggle (persisted) + dropdown dismissal.
// The initial theme is set by an inline <head> script to avoid a flash.
(function () {
  var root = document.documentElement;

  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // Close open <details> menus on outside click or after picking an item.
  var menus = document.querySelectorAll("details.topbar-menu");
  document.addEventListener("click", function (e) {
    menus.forEach(function (d) {
      if (d.open && !d.contains(e.target)) d.open = false;
    });
  });
  menus.forEach(function (d) {
    var panel = d.querySelector(".topbar-panel");
    if (!panel) return;
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) d.open = false;
    });
  });
})();
