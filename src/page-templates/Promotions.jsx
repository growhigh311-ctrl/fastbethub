'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import SEO from '../components/SEO';
import { Gift, HeartHandshake, Percent, MessageSquare } from 'lucide-react';

export default function Promotions() {
  const { brand } = useBrand();

  const promos = [
    {
      title: '10% Welcome Bonus',
      sub: 'On your very first deposit',
      desc: 'Create your online cricket ID today and receive a 10% bonus credit on your initial deposit. Maximize your starting wagers instantly!',
      terms: 'Minimum deposit ₹500. Credits added immediately upon payment confirmation.',
      icon: <Gift className="w-8 h-8 text-accent" />
    },
    {
      title: '5% Unlimited Referral Bonus',
      sub: 'Bring your friends to play',
      desc: `Refer new active players to ${brand.name} and earn a 5% bonus credit based on their initial load amount. No limit on the number of referrals!`,
      terms: 'Referral must complete a verified deposit. Request credits on WhatsApp support.',
      icon: <HeartHandshake className="w-8 h-8 text-accent" />
    },
    {
      title: 'Weekly Loss Cashback',
      sub: 'Special league cashback',
      desc: 'Protect your sports betting bankroll. Receive a weekly 5% cashback reward on net losses during major tournaments like the IPL and World Cup.',
      terms: 'Calculated weekly on net sportbook balance. Credited to wallet every Monday.',
      icon: <Percent className="w-8 h-8 text-accent" />
    }
  ];

  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20claim%20my%2010%25%20Welcome%20Bonus.`;

  return (
    <div className="py-16 md:py-24 bg-bg">
      <SEO pageKey="promotions" breadcrumbName="Promotions" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Rewards lobby
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Promotions & Bonuses
          </h1>
          <p className="text-sm text-text-muted mt-2">
            Get more value for your deposits with genuine, easily claimable rewards on {brand.name}.
          </p>
        </div>

        {/* Promos Column */}
        <div className="space-y-8">
          {promos.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-primary/25 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-bg border border-slate-800 flex items-center justify-center flex-shrink-0">
                {p.icon}
              </div>

              {/* Text */}
              <div className="flex-grow space-y-2 text-xs sm:text-sm text-text-muted">
                <h3 className="text-xl font-bold text-white tracking-wide">{p.title}</h3>
                <p className="text-xs text-accent font-semibold uppercase tracking-wider">{p.sub}</p>
                <p className="leading-relaxed">{p.desc}</p>
                <p className="text-[10px] text-text-muted italic pt-1">
                  <strong>Terms:</strong> {p.terms}
                </p>
              </div>

              {/* Action */}
              <div className="w-full md:w-auto flex-shrink-0 pt-4 md:pt-0">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  <span>Claim Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
