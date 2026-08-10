import { Helmet } from "react-helmet-async";

const SITE_URL = "https://velcor.ai";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Sets a unique <title>, meta description, canonical URL and Open Graph/Twitter
 * tags for the current route. Without this, every route falls back to the
 * static tags in index.html — which point back at the homepage — and search
 * engines treat every inner page as a duplicate of "/".
 *
 * @param {string} title - Page-specific title (site name is appended automatically)
 * @param {string} description - Page-specific meta description (~150-160 chars)
 * @param {string} path - Route path starting with "/" (e.g. "/about"), used to build the canonical URL
 * @param {string} [image] - Optional absolute URL to an OG/Twitter image
 * @param {boolean} [noindex] - Set true for pages that should not be indexed (e.g. thank-you pages)
 */
export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE, noindex = false }) {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Velcor.ai`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Velcor.ai" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
