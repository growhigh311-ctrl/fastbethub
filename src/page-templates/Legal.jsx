'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useBrand } from '../context/BrandContext.jsx';
import SEO from '../components/SEO.jsx';

export default function Legal() {
  const { brand } = useBrand();
  const pathname = usePathname();

  const path = pathname;

  let seoKey = 'terms';
  let title = 'Terms & Conditions';
  let content = null;

  if (path === '/privacy') {
    seoKey = 'privacy';
    title = 'Privacy Policy';
    content = (
      <div className="space-y-6">
        <p>At {brand.name}, we value your privacy above all else. This policy outlines how we protect and manage your registration credentials, deposit logs, and gaming accounts.</p>
        
        <h2 className="text-lg font-bold text-white mt-6">1. Information Collection</h2>
        <p>We only collect the baseline details required to create and maintain your gaming ID, specifically your name, phone number, and WhatsApp reference. We do not store credit card or payment application password logs.</p>

        <h2 className="text-lg font-bold text-white mt-6">2. Data Confidentiality</h2>
        <p>All user information remains encrypted on our secure, off-grid server nodes. We do not sell, rent, or share player databases with third-party networks or external advertisers.</p>

        <h2 className="text-lg font-bold text-white mt-6">3. Transaction Security</h2>
        <p>All deposits and cashouts are conducted through direct peer-to-peer Indian UPI apps and bank transfer channels on our official WhatsApp numbers. Our website uses 256-bit SSL encryption to secure traffic.</p>
      </div>
    );
  } else if (path === '/responsible-gaming') {
    seoKey = 'responsibleGaming';
    title = 'Responsible Gaming';
    content = (
      <div className="space-y-6">
        <p>{brand.name} is dedicated to providing a safe, controlled, and responsible sports betting environment. Gaming should be treated as a form of entertainment, not as a primary source of income.</p>
        
        <h2 className="text-lg font-bold text-white mt-6">1. Age Restrictive Policy</h2>
        <p>Underage betting is strictly prohibited. You must be at least 18 years of age to register an online cricket ID and play on our platform.</p>

        <h2 className="text-lg font-bold text-white mt-6">2. Managing Play Habits</h2>
        <p>We recommend establishing deposit budgets. Only load funds that you can afford to lose and divide your wallet balance into smaller portions to withstand volatile sequences.</p>

        <h2 className="text-lg font-bold text-white mt-6">3. Self-Exclusion Tools</h2>
        <p>If you feel your gaming habits are becoming problematic, contact our WhatsApp customer care desk to request temporary suspension or permanent deletion of your ID.</p>
      </div>
    );
  } else {
    // Default /terms
    seoKey = 'terms';
    title = 'Terms & Conditions';
    content = (
      <div className="space-y-6">
        <p>By creating a gaming ID on the official {brand.name} portal, you agree to comply with the standard terms of service, wagering rules, and withdrawal guidelines detailed below.</p>
        
        <h2 className="text-lg font-bold text-white mt-6">1. ID Registration & Usage</h2>
        <p>Users must provide accurate names and verified WhatsApp numbers during registration. Sharing credentials or passwords with other parties is forbidden. {brand.name} is not liable for account compromises resulting from shared access.</p>

        <h2 className="text-lg font-bold text-white mt-6">2. Deposits & Payouts</h2>
        <p>The minimum deposit is ₹500. All transactions must run through our verified support contacts. We guarantee withdrawal processing within 15 minutes of request confirmation, subject to bank network speeds.</p>

        <h2 className="text-lg font-bold text-white mt-6">3. Account Integrity</h2>
        <p>If we detect bot betting, double-book registrations, or general exploitation of system odds, we reserve the right to freeze the corresponding ID balance pending review.</p>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-bg text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
      <SEO pageKey={seoKey} breadcrumbName={title} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-surface border border-slate-800 shadow-xl">
          <h1 className="text-3xl font-extrabold text-white mb-6 border-b border-slate-800 pb-4">{title}</h1>
          {content}
        </div>
      </div>
    </div>
  );
}
