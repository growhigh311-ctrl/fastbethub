import React from 'react';
import Promotions from '../../page-templates/Promotions.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.promotions.title,
  description: brand.seo.promotions.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/promotions`,
  }
};

export default function Page() {
  return <Promotions />;
}
