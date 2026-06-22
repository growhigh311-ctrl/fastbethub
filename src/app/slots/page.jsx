import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.slots.title,
  description: brand.seo.slots.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/slots`,
  }
};

export default function Page() {
  return <Services />;
}
