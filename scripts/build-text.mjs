// Renders docs/GUIDE_GIT_{en,sv}.md into styled, self-hosted HTML pages at
// languages/{lang}/text/index.html — matching the site (navbar, theme, type).
// Re-run after editing the markdown: `npm run build:text`.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { Marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";

const VERSION = 21; // keep in sync with the ?v= on the other pages

const brandGlyph = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#533afd" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`;
const globe = `<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
const sun = `<svg class="icon-sun" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>`;
const moon = `<svg class="icon-moon" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path></svg>`;

const LANGS = {
  en: {
    src: "docs/GUIDE_GIT_EN.md",
    title: "Guide to Git",
    home: "Back to start",
    visual: "Visual guide",
    langLabel: "Language",
    themeLabel: "Toggle dark mode",
    license: "MIT License",
    svCurrent: false,
  },
  sv: {
    src: "docs/GUIDE_GIT_SV.md",
    title: "Guide till Git",
    home: "Till startsidan",
    visual: "Visuell guide",
    langLabel: "Språk",
    themeLabel: "Växla mörkt läge",
    license: "MIT-licensen",
    svCurrent: true,
  },
};

const noFlash = `<script>
      (function () {
        try {
          document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";
        } catch (e) {}
      })();
    </script>`;

function langMenu(cfg) {
  const sv = `<a href="../../sv/text/"${cfg.svCurrent ? ' aria-current="true"' : ""}><span class="topbar-flag">🇸🇪</span> Svenska</a>`;
  const en = `<a href="../../en/text/"${cfg.svCurrent ? "" : ' aria-current="true"'}><span class="topbar-flag">🇺🇸</span> English</a>`;
  return sv + en;
}

function page(lang, cfg, body) {
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${cfg.title}</title>
    <link rel="stylesheet" href="../../../assets/css/style.css?v=${VERSION}" />
    ${noFlash}
  </head>
  <body>
    <nav class="topbar">
      <div class="topbar-inner">
        <a class="topbar-brand" href="../../../" title="${cfg.home}">
          <span class="topbar-mark">${brandGlyph}</span>
          <span class="topbar-brand-text">${cfg.title}</span>
        </a>
        <a class="topbar-link" href="../">${cfg.visual}</a>
        <div class="topbar-right">
          <details class="topbar-menu">
            <summary class="topbar-icon" aria-label="${cfg.langLabel}" title="${cfg.langLabel}">${globe}</summary>
            <div class="topbar-panel is-right">${langMenu(cfg)}</div>
          </details>
          <button type="button" class="topbar-icon theme-toggle" data-theme-toggle aria-label="${cfg.themeLabel}">${sun}${moon}</button>
        </div>
      </div>
    </nav>
    <main class="page">
      <article class="markdown">
${body}
      </article>
      <footer class="site-footer">
        © 2026 Montathar Faraon · Licensed under the
        <a href="https://github.com/everydaydesign/git-guide/blob/main/LICENSE">${cfg.license}</a>
      </footer>
    </main>
    <script src="../../../assets/js/site.js" defer></script>
  </body>
</html>
`;
}

for (const [lang, cfg] of Object.entries(LANGS)) {
  const marked = new Marked();
  marked.use(gfmHeadingId());
  const md = readFileSync(cfg.src, "utf8");
  const html = marked.parse(md).trim();
  const dir = `languages/${lang}/text`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, page(lang, cfg, html));
  console.log(`built ${dir}/index.html`);
}
