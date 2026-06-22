import React from 'react';
import Home from '../page-templates/Home.jsx';
import brand from '../config/brand.js';

export const metadata = {
  title: brand.seo.home.title,
  description: brand.seo.home.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}`,
  },
  openGraph: {
    title: brand.seo.home.title,
    description: brand.seo.home.metaDescription,
    url: `https://${brand.domain}`,
    type: 'website',
    images: [
      {
        url: `https://${brand.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.seo.home.title,
    description: brand.seo.home.metaDescription,
  }
};

export default function Page() {
  return <Home />;
}
