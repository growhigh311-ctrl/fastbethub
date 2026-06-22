import React from 'react';

export default function SEO({ pageKey, customTitle, customDesc, breadcrumbName }) {
  // In Next.js, title and description tags are handled by static metadata exports.
  // This component only injects the Breadcrumb schema to prevent console errors.
  
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },
      ...(breadcrumbName ? [{
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbName,
        "item": `/${breadcrumbName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      }] : [])
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
    />
  );
}
