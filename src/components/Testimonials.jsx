'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { brand } = useBrand();
  const testimonials = brand.testimonials || [];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Thousands of Active Gamers
          </h2>
          <p className="text-sm text-text-muted mt-3">
            Here is what verified accounts say about deposit speeds, payouts, and support at {brand.name}.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-surface border border-slate-800 flex flex-col justify-between shadow-xl relative group hover:border-slate-700 transition-colors"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-900/60 pointer-events-none group-hover:text-primary/15 transition-colors" />

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating || 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-accent stroke-none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800">
                <span className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-extrabold text-white text-sm">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-[10px] text-text-muted mt-0.5">{t.location}, India</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
