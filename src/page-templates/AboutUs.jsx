'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import SEO from '../components/SEO';
import { ShieldCheck, Users, HelpCircle, Trophy } from 'lucide-react';

export default function AboutUs() {
  const { brand } = useBrand();

  return (
    <div className="py-16 md:py-24 bg-bg">
      <SEO pageKey="about" breadcrumbName="About Us" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">About {brand.name}</h1>
          <p className="text-sm text-text-muted mt-2">India's most trusted, peer-to-peer cricket betting exchange</p>
        </div>

        {/* Content body */}
        <div className="space-y-8 text-xs sm:text-sm text-text-muted leading-relaxed">
          <div className="p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4">Our Mission</h2>
            <p className="mb-4">{brand.aboutUsText}</p>
            <p>
              We solve the key issues faced by gaming enthusiasts: long wait times, lack of transaction support, and low-reliability hosts. On the {brand.name} platform, every interaction is managed directly on WhatsApp for convenience, speed, and absolute clarity.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '2 Min', label: 'ID Creation' },
              { val: '15 Min', label: 'Avg Payout Time' },
              { val: '24/7/365', label: 'Support Hotline' },
              { val: '100% Safe', label: 'Secure Banking' }
            ].map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-surface border border-slate-800 text-center shadow-md">
                <p className="text-xl sm:text-2xl font-black text-accent">{stat.val}</p>
                <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white">Our Core Commitments</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-xs">
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-primary flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Guaranteed Security</h4>
                  <p className="text-text-muted leading-normal">Your credit balances and contact information are fully protected on encrypted, off-grid storage.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-accent flex-shrink-0">
                  <Trophy className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Peerless Exchange Commission</h4>
                  <p className="text-text-muted leading-normal">We charge the lowest market commission on exchange wagers, ensuring you keep more of your wins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
