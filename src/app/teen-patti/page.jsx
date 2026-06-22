import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.teenPatti.title,
  description: brand.seo.teenPatti.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/teen-patti`,
  }
};

export default function Page() {
  return <Services />;
}
