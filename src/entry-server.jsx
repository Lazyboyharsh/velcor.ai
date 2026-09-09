import React from "react";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

// Rendered at build time in Node (no browser). Streaming lets lazy() route
// components fully resolve before we capture the HTML.
//
// react-helmet-async@3 (React 19 build) renders <title>/<meta>/<link> inline and
// relies on React 19's native metadata hoisting rather than an SSR context. So we
// hoist those tags into <head> ourselves for the static HTML, while leaving
// <script type="application/ld+json"> in the body (valid for crawlers, and it
// keeps client hydration matching since React does not hoist inline scripts).
export function render(url) {
  const tree = (
    <React.StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return new Promise((resolve, reject) => {
    let raw = "";
    const writable = new Writable({
      write(chunk, _enc, cb) {
        raw += chunk.toString();
        cb();
      },
      final(cb) {
        cb();
      },
    });

    writable.on("finish", () => {
      const headTags = [];
      // Pull hoistable metadata (title/meta/link) out of the body into <head>.
      const html = raw.replace(
        /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?\/?>/gi,
        (tag) => {
          headTags.push(tag);
          return "";
        }
      );
      resolve({ html, head: headTags.join("\n    ") });
    });

    const { pipe } = renderToPipeableStream(tree, {
      onAllReady() {
        pipe(writable);
      },
      onShellError: reject,
      onError: reject,
    });
  });
}
