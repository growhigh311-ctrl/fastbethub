import React from 'react';
import Legal from '../../page-templates/Legal.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.terms.title,
  description: brand.seo.terms.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/terms`,
  }
};

export default function Page() {
  return <Legal />;
}
