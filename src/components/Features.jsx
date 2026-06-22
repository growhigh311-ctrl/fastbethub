'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Shield, Zap, Clock, Smartphone, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const { brand } = useBrand();

  const featureItems = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Instant ID Activation',
      desc: `Get your online cricket exchange and gaming ID on ${brand.name} in less than 2 minutes on WhatsApp.`
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: '15-Min Fast Withdrawals',
      desc: 'No delays. Withdraw your winnings directly to your bank account or UPI wallet in 10 to 15 minutes.'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />, // We can map this to active support
      title: '24x7 WhatsApp Support',
      desc: 'Our dedicated customer support agents are online day and night to answer questions and load deposits.'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Secure & Private Platform',
      desc: 'All player registrations, financial databases, and credentials run on 256-bit SSL encrypted nodes.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Live Match Betting',
      desc: 'Enjoy live interactive back-and-lay odds tracking for Cricket matches, Football leagues, and Tennis.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: '100% Trusted Service',
      desc: `Join thousands of active Indian punters who trust ${brand.name} for cricket IDs, casinos, and Teen Patti.`
    }
  ];

  return (
    <section className="py-20 bg-bg-dark border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premium Features Designed For You
          </h2>
          <p className="text-sm text-text-muted mt-3">
            We provide a fast, secure, and highly transparent betting environment on India's top cricket exchange.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-surface border border-slate-800/80 hover:border-primary/25 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg border border-slate-800/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
