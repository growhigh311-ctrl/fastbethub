import React from 'react';
import { BrandProvider } from '../context/BrandContext.jsx';
import Layout from '../components/Layout.jsx';
import brand from '../config/brand.js';
import '../index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={brand.id}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <BrandProvider>
          <Layout>
            {children}
          </Layout>
        </BrandProvider>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: brand.seo.home.title,
    template: `%s | ${brand.name}`
  },
  description: brand.seo.home.metaDescription,
  keywords: [brand.name, brand.tagline, "Online Cricket ID", "Instant Payouts", "Cricket Betting Exchange"],
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  applicationName: brand.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: brand.seo.home.title,
    description: brand.seo.home.metaDescription,
    url: `https://${brand.domain}`,
    siteName: brand.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.seo.home.title,
    description: brand.seo.home.metaDescription,
  }
};