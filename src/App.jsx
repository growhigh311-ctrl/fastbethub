import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Promotions from './pages/Promotions';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  return (
    <BrandProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            
            {/* Services Pages */}
            <Route path="/cricket-id" element={<Services />} />
            <Route path="/sports-betting" element={<Services />} />
            <Route path="/casino" element={<Services />} />
            <Route path="/live-casino" element={<Services />} />
            <Route path="/teen-patti" element={<Services />} />
            <Route path="/slots" element={<Services />} />
            <Route path="/exchange" element={<Services />} />
            
            {/* Other Pages */}
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal pages */}
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/responsible-gaming" element={<Legal />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </BrandProvider>
  );
}
