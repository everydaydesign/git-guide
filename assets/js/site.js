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
  // Scroll-spy: highlight the current section in the "On this page" TOC.
  var tocLinks = document.querySelectorAll(".toc-links a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });
    var active = null;
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          if (active) active.classList.remove("toc-active");
          active = byId[e.target.id];
          if (active) active.classList.add("toc-active");
        });
      },
      { rootMargin: "-80px 0px -72% 0px", threshold: 0 },
    );
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }
})();
