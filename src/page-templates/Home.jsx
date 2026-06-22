'use client';

import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GamesGrid from '../components/GamesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <SEO pageKey="home" />
      <Hero />
      <GamesGrid />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <ContactForm />
    </>
  );
}
