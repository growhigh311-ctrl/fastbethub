import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.sportsBetting.title,
  description: brand.seo.sportsBetting.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/sports-betting`,
  }
};

export default function Page() {
  return <Services />;
}
