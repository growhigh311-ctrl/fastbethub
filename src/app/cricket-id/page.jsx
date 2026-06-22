import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.cricketId.title,
  description: brand.seo.cricketId.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/cricket-id`,
  }
};

export default function Page() {
  return <Services />;
}
