import React from 'react';
import FAQPage from '../../page-templates/FAQPage.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.faq.title,
  description: brand.seo.faq.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/faq`,
  }
};

export default function Page() {
  return <FAQPage />;
}
