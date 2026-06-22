'use client';

import React from 'react';
import Link from 'next/link';
import { useBrand } from '../context/BrandContext.jsx';
import { ChevronLeft, User, Calendar, Clock } from 'lucide-react';

export default function BlogDetails({ slug }) {
  const { brand } = useBrand();

  const blog = brand.blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-20 text-center text-white min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Guide Not Found</h2>
        <p className="text-sm text-text-muted">The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="text-primary hover:underline text-sm font-semibold">Back to Blog List</Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-bg font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-white mb-8 transition-colors uppercase tracking-wider"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Betting Guides</span>
        </Link>

        {/* Blog Header details */}
        <header className="mb-10 pb-8 border-b border-slate-800/80">
          <span className="inline-block px-2.5 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Author/Date Row */}
          <div className="flex flex-wrap gap-4 items-center text-xs text-text-muted mt-6 font-medium">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>By {blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* Blog Rich Text Content */}
        <article
          className="prose prose-invert max-w-none text-xs sm:text-sm text-text-muted leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </div>
  );
}
