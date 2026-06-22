'use client';

import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <SEO pageKey="contact" breadcrumbName="Contact Us" />
      <ContactForm />
    </>
  );
}
