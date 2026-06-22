'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultBrand from '../config/brand.js';
import { brandsData } from '../config/brands/index.js';

const BrandContext = createContext(null);

export const BrandProvider = ({ children }) => {
  const [activeBrand, setActiveBrand] = useState(defaultBrand);

  useEffect(() => {
    // Only support runtime theme switching in development mode
    if (process.env.NODE_ENV === 'development') {
      const params = new URLSearchParams(window.location.search);
      const queryBrand = params.get('brand') || params.get('site');
      const savedPreview = localStorage.getItem('reddy_preview_brand');
      
      const detectionSource = queryBrand || savedPreview;
      if (detectionSource && brandsData[detectionSource.toLowerCase()]) {
        setActiveBrand(brandsData[detectionSource.toLowerCase()]);
      }
    }
  }, []);

  useEffect(() => {
    if (activeBrand) {
      document.documentElement.setAttribute('data-theme', activeBrand.id);
    }
  }, [activeBrand]);

  const changeBrandPreview = (brandId) => {
    if (brandsData[brandId]) {
      localStorage.setItem('reddy_preview_brand', brandId);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('brand', brandId);
      window.location.href = newUrl.toString();
    }
  };

  return (
    <BrandContext.Provider value={{ brand: activeBrand, changeBrandPreview }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
