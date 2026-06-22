'use client';

import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const { brand } = useBrand();
  const faqs = brand.faqs || [];
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Compile JSON-LD FAQ Schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-bg-dark border-y border-slate-800">
      {/* Dynamic JSON-LD injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-muted mt-3">
            Everything you need to know about setting up your online gaming ID, deposits, withdrawals, and game rules at {brand.name}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-surface border border-slate-800 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-white focus:outline-none hover:bg-slate-900/30 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-bg border border-slate-800 flex items-center justify-center text-text-muted">
                    {isOpen ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4 text-primary" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 pt-0 border-t border-slate-800/80 text-xs sm:text-sm text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
