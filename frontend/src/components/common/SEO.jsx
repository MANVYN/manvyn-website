import { Helmet } from "react-helmet-async";

const SITE_NAME = "MANVYN";
const SITE_URL = "https://www.manvyn.com";

const SEO = ({ title, description, path = "/" }) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
