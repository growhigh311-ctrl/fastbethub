'use client';

import React from 'react';
import Link from 'next/link';
import { useBrand } from '../context/BrandContext.jsx';
import SEO from '../components/SEO.jsx';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogList() {
  const { brand } = { ...useBrand() };
  const blogs = brand.blogs || [];

  return (
    <div className="py-16 md:py-24 bg-bg">
      <SEO pageKey="blog" breadcrumbName="Betting Blogs" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Betting Academy
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Blogs & Betting Guides
          </h1>
          <p className="text-sm text-text-muted mt-2">
            Stay updated with current match trends, IPL betting guides, Teen Patti rules, and online gaming security strategies.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((b) => (
            <article
              key={b.id}
              className="p-6 rounded-3xl bg-surface border border-slate-800 flex flex-col justify-between hover:border-primary/20 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-[10px] text-text-muted mb-4 font-bold uppercase tracking-wider">
                  <span className="text-accent">{b.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{b.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug tracking-wide group-hover:text-accent transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {b.summary}
                </p>
              </div>

              {/* Author and Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2.5 text-[10px] text-text-muted">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>By {b.author}</span>
                </div>

                <Link
                  href={`/blog/${b.slug}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-light transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
