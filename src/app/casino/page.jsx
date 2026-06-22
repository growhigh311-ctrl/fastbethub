import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.casino.title,
  description: brand.seo.casino.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/casino`,
  }
};

export default function Page() {
  return <Services />;
}
