'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Check, Shield, User, Wallet, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const { brand } = useBrand();

  const steps = [
    {
      num: '01',
      title: 'Request ID',
      desc: `Send a WhatsApp message to our support desk to register and receive your login instructions`
    },
    {
      num: '02',
      title: 'Make Deposit',
      desc: 'Fund your wallet using BHIM UPI, PhonePe, Paytm, or net-banking (minimum deposit: ₹500)'
    },
    {
      num: '03',
      title: 'Start Playing',
      desc: 'Login to the DiamondPlay99 portal, track live scores, and start betting with instant odds'
    },
    {
      num: '04',
      title: 'Instant Cashout',
      desc: 'Send a WhatsApp request to withdraw your winning balance directly to your bank account'
    }
  ];

  return (
    <section className="py-20 bg-bg-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-black uppercase tracking-widest">
              Simple Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Get Your Online Cricket ID and Play in Minutes
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              It is effortless to get started on DiamondPlay99. We've optimized our registration and banking procedures to make your gaming life simpler. There are no extra steps to verify your account or lengthy approval processes to fund your exchange wallet
            </p>

            {/* List checklist */}
            <div className="space-y-3 pt-2">
              {[
                'Instant account activation within 2 minutes',
                'Wide range of local payment gateways',
                'All withdrawals processed within 15 minutes',
                'End-to-end data encryption'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-white">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Steps Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-surface border border-slate-800 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-primary/45 tracking-widest">{step.num}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-accent">
                    ★
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">{step.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
