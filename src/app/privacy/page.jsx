import React from 'react';
import Legal from '../../page-templates/Legal.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.privacy.title,
  description: brand.seo.privacy.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/privacy`,
  }
};

export default function Page() {
  return <Legal />;
}
