import React from "react";
import { Helmet } from "react-helmet";

// Reusable SEO helper to keep page metadata consistent across the app.
const Seo = ({
  title,
  description,
  keywords,
  image,
  type = "website",
  url,
}) => {
  const pageTitle = title
    ? `${title} | Go Creative Solutions`
    : "Go Creative Solutions - Event Management";
  const canonicalUrl = url || window.location.href;
  const metaDescription =
    description ||
    "Go Creative Solutions turns ideas into unforgettable experiences through seamless, innovative, and impactful event management.";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image ? <meta name="twitter:image" content={image} /> : null}
    </Helmet>
  );
};

export default Seo;
