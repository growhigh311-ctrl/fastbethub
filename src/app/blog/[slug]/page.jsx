import React from 'react';
import { redirect } from 'next/navigation';
import BlogDetails from '../../../page-templates/BlogDetails.jsx';
import brand from '../../../config/brand.js';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = brand.blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Betting Guide - Not Found',
    };
  }

  return {
    title: `${blog.title} - ${brand.name}`,
    description: blog.summary,
    alternates: {
      canonical: `https://${brand.domain}/blog/${blog.slug}`,
    }
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if (slug === 'england-tour-australia-2026-betting') {
    redirect('/england-tour-australia-2026-betting/');
  }
  return <BlogDetails slug={slug} />;
}
