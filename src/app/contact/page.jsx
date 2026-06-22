import React from 'react';
import Contact from '../../page-templates/Contact.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.contact.title,
  description: brand.seo.contact.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/contact`,
  }
};

export default function Page() {
  return <Contact />;
}
