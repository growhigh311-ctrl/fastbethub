import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.exchange.title,
  description: brand.seo.exchange.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/exchange`,
  }
};

export default function Page() {
  return <Services />;
}
