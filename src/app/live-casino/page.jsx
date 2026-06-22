import React from 'react';
import Services from '../../page-templates/Services.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.liveCasino.title,
  description: brand.seo.liveCasino.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/live-casino`,
  }
};

export default function Page() {
  return <Services />;
}
