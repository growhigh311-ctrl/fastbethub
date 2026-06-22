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
