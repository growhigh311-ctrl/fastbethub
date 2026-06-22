import React from 'react';
import BlogList from '../../page-templates/BlogList.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: brand.seo.blog.title,
  description: brand.seo.blog.metaDescription,
  alternates: {
    canonical: `https://${brand.domain}/blog`,
  }
};

export default function Page() {
  return <BlogList />;
}
