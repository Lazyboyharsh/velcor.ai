import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://velcor.ai";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Per-route <head> manager. Sets a unique title, description, canonical URL,
 * robots directive, Open Graph/Twitter tags and (optionally) JSON-LD structured
 * data for the current route.
 *
 * Without this on a route, that route falls back to the static tags in
 * index.html (whose canonical points at "/"), so search engines treat every
 * inner page as a duplicate of the homepage and do not index them separately.
 *
 * @param {string}  title        Page-specific title (site name appended automatically)
 * @param {string}  description  Page-specific meta description (~150-160 chars)
 * @param {string}  path         Route path starting with "/" (e.g. "/about")
 * @param {string}  [image]      Absolute URL to an OG/Twitter image
 * @param {boolean} [noindex]    True for pages that should not be indexed
 * @param {"website"|"article"} [type]  OG type
 * @param {Array<{name:string,path:string}>} [breadcrumbs]  Ordered crumbs (Home is added automatically)
 * @param {object}  [article]    { publishedTime, modifiedTime, author, section }
 * @param {object|object[]} [jsonLd]  Extra JSON-LD node(s) to inject as-is
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
  type = "website",
  breadcrumbs,
  article,
  jsonLd,
}) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Velcor.ai`;

  // Build a WebPage node linked to the site-wide Organization + WebSite graph
  const graph = [
    {
      "@type": type === "article" ? "Article" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: fullTitle,
      description,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "en",
      primaryImageOfPage: image,
      ...(article
        ? {
            headline: title,
            datePublished: article.publishedTime,
            dateModified: article.modifiedTime || article.publishedTime,
            author: article.author
              ? { "@type": "Person", name: article.author }
              : { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            image,
            ...(article.section ? { articleSection: article.section } : {}),
          }
        : {}),
    },
  ];

  if (breadcrumbs && breadcrumbs.length) {
    const crumbs = [{ name: "Home", path: "/" }, ...breadcrumbs];
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${c.path}`,
      })),
    });
  }

  if (jsonLd) {
    const extra = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    extra.forEach((node) => graph.push(node));
  }

  const structuredData = { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Velcor.ai" />

      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
