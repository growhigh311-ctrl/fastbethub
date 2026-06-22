import React from 'react';
import Legal from '../../page-templates/Legal.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.responsibleGaming.title,
  description: brand.seo.responsibleGaming.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/responsible-gaming`,
  }
};

export default function Page() {
  return <Legal />;
}
