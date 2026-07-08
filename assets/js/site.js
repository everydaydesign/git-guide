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
  // Scroll-spy for the "On this page" TOC. Position-based (not Intersection
  // Observer) so the last section still activates at the bottom of the page.
  var tocLinks = document.querySelectorAll(".toc-links a");
  if (tocLinks.length) {
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var sections = [];
    tocLinks.forEach(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) sections.push({ link: a, el: el });
    });

    var current = null;
    function setActive(link) {
      if (current === link) return;
      if (current) current.classList.remove("toc-active");
      current = link;
      if (current) current.classList.add("toc-active");
    }

    function onScroll() {
      if (!sections.length) return;
      var doc = document.documentElement;
      var atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      var pick = sections[0];
      if (atBottom) {
        pick = sections[sections.length - 1];
      } else {
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].el.getBoundingClientRect().top <= 120) pick = sections[i];
        }
      }
      setActive(pick.link);
    }

    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
      },
      { passive: true },
    );
    onScroll();

    // The first link ("How Git works") jumps to the very top of the page.
    document.querySelectorAll('a[href="#overview"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        try {
          history.replaceState(null, "", location.pathname + location.search);
        } catch (err) {}
      });
    });
  }
})();
