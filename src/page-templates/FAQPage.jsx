'use client';

import React from 'react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';

export default function FAQPage() {
  return (
    <>
      <SEO pageKey="faq" breadcrumbName="FAQs" />
      <FAQSection />
    </>
  );
}
