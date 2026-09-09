// Build-time static prerender: renders every known route to static HTML so that
// crawlers and AI systems (which do not run JavaScript) receive real content and
// per-page meta/JSON-LD. Client hydrates on top. Pure Node — no headless browser.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const { render } = await import(
  url.pathToFileURL(path.join(root, "dist-server", "entry-server.js")).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

// Collect dynamic slugs straight from source (no build needed for data).
const readSlugs = (file) => {
  const txt = fs.readFileSync(path.join(root, file), "utf-8");
  return [...txt.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
};
const blogSlugs = readSlugs("src/data/blogData.js");
const caseSlugs = readSlugs("src/pages/CaseStudiesPage.jsx");

const routes = [
  "/",
  "/services",
  "/process",
  "/infrastructure",
  "/case-studies",
  "/blog",
  "/about",
  "/contact",
  "/schedule-meeting",
  "/privacy-policy",
  "/terms-of-service",
  ...blogSlugs.map((s) => `/blog/${s}`),
  ...caseSlugs.map((s) => `/case-studies/${s}`),
];

let ok = 0;
for (const route of routes) {
  try {
    const { html, head } = await render(route);
    const page = template
      // remove the fallback <title> so the per-page one from Helmet is the only title
      .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
      .replace("<!--app-head-->", head || "")
      .replace("<!--app-html-->", html || "");

    const outPath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route, "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    ok++;
    console.log(`  prerendered ${route}`);
  } catch (err) {
    console.error(`  FAILED ${route}:`, err.message);
    process.exitCode = 1;
  }
}

// Keep sitemap.xml perfectly in sync with the routes we actually ship.
const SITE = "https://velcor.ai";
const priorityFor = (r) => (r === "/" ? "1.0" : r === "/schedule-meeting" ? "0.9" : "0.7");
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url><loc>${SITE}${r === "/" ? "/" : r}</loc><priority>${priorityFor(
          r
        )}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`  wrote sitemap.xml (${routes.length} urls)`);

console.log(`\nPrerendered ${ok}/${routes.length} routes.`);
