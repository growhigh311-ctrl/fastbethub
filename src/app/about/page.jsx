import React from 'react';
import AboutUs from '../../page-templates/AboutUs.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.about.title,
  description: brand.seo.about.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/about`,
  }
};

export default function Page() {
  return <AboutUs />;
}
