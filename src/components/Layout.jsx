'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBrand } from '../context/BrandContext.jsx';
import { Menu, X, Phone, MessageSquare, Shield, HelpCircle, Trophy } from 'lucide-react';
import { StickyWhatsApp, FloatingContactButtons } from './ConversionWidgets.jsx';
import DevPanel from './DevPanel.jsx';

export default function Layout({ children }) {
  const { brand } = useBrand();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  // Header Nav Links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cricket ID', path: '/cricket-id' },
    { name: 'Exchange', path: '/exchange' },
    { name: 'Sports Betting', path: '/sports-betting' },
    { name: 'Live Casino', path: '/live-casino' },
    { name: 'Teen Patti', path: '/teen-patti' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Footer Categorized Links
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const gamesLinks = [
    { name: 'Cricket Exchange', path: '/exchange' },
    { name: 'Sports Betting', path: '/sports-betting' },
    { name: 'Live Casino', path: '/live-casino' },
    { name: 'Slot Games', path: '/slots' },
    { name: 'Teen Patti', path: '/teen-patti' },
    { name: 'Casino Games', path: '/casino' }
  ];

  const legalLinks = [
    { name: 'Responsible Gaming', path: '/responsible-gaming' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20get%20my%20Online%20Cricket%20ID%20instantly.`;

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-bg text-text">
      {/* Header */}
      <header className="sticky top-0 z-[900] bg-surface/90 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white font-extrabold shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-200">
                <Trophy className="w-5 h-5" />
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
                {brand.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-accent bg-slate-900/50'
                      : 'text-text-muted hover:text-white hover:bg-slate-900/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Desk</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-wider py-2.5 px-5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-primary/20"
              >
                Get Instant ID
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden bg-primary hover:bg-primary-hover text-white text-[10px] font-extrabold uppercase tracking-wider py-2 px-3 rounded-lg transition-colors"
              >
                Get ID
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-slate-800 max-h-[75vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                    isActive(link.path)
                      ? 'text-accent bg-slate-900'
                      : 'text-text-muted hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-800 text-sm font-bold text-text-muted hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call Direct Desk</span>
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-white text-sm font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl text-center shadow-lg transition-transform active:scale-95"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-slate-800 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand details */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-extrabold">
                  <Trophy className="w-4.5 h-4.5" />
                </span>
                <span className="text-lg font-black tracking-tight text-white">{brand.name}</span>
              </Link>
              <p className="text-xs text-text-muted leading-relaxed mb-4 max-w-xs">
                {brand.tagline}. India's premier high-performing exchange for online sports betting and live table cards.
              </p>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <Shield className="w-4.5 h-4.5 text-green-500" />
                <span>256-Bit SSL Encrypted Gaming</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-xs text-text-muted hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Betting Lobby */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4">Gaming Lobby</h4>
              <ul className="space-y-2">
                {gamesLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-xs text-text-muted hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support / Legals */}
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-wider mb-4">Support & Policy</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-xs text-text-muted hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/sitemap.xml" className="text-xs text-text-muted hover:text-accent transition-colors">
                    Sitemap XML
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-text-muted text-center md:text-left">
              &copy; {new Date().getFullYear()} {brand.name}. All rights reserved. Play responsibly.
            </p>
            <div className="flex items-center gap-3 text-[10px] text-text-muted">
              <span>🔞 18+ Only</span>
              <span>•</span>
              <Link href="/responsible-gaming" className="hover:text-white transition-colors">BeGambleAware</Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Support: {brand.phone}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <StickyWhatsApp />
      <FloatingContactButtons />
      <DevPanel />
    </div>
  );
}
