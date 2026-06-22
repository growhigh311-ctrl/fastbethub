'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { MessageSquare, Play, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { brand } = useBrand();
  const seoHome = brand.seo.home;

  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20get%20my%20Online%20Cricket%20ID%20instantly.`;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-32 bg-hero-pattern">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-light/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-6">
            
            {/* Promo Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 py-1.5 px-3.5 bg-surface border border-slate-800 rounded-full"
            >
              <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">
                India's #1 Instant Book ID Platform
              </span>
            </motion.div>

            {/* H1 Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white"
            >
              {seoHome.h1}
            </motion.h1>

            {/* H3 Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-medium text-text-muted max-w-2xl"
            >
              {seoHome.h3}. Register now to receive a 10% welcome bonus on deposits and withdraw in under 15 minutes.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 py-2"
            >
              <div className="flex items-center gap-1.5 text-xs text-white bg-slate-900/50 py-1.5 px-3 rounded-lg border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span>Active Traders Online</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white bg-slate-900/50 py-1.5 px-3 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>100% Secure Payouts</span>
              </div>
            </motion.div>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-4 px-8 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 text-sm uppercase tracking-wider"
              >
                <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                <span>Get ID on WhatsApp</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-extrabold py-4 px-8 rounded-2xl shadow-xl transition-all duration-200 active:scale-95 text-sm uppercase tracking-wider border border-primary-light/10"
              >
                <span>Join Telegram Book</span>
              </a>
            </motion.div>
          </div>

          {/* Graphical Right Panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden glass-panel border border-slate-800 p-8 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80 z-10" />
              
              {/* Badge */}
              <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent text-text-inverse text-[9px] font-black uppercase rounded-md tracking-wider">
                Instant Win
              </span>

              {/* Mockup Interface info */}
              <div className="relative z-20 space-y-6">
                <h4 className="text-lg font-black uppercase text-accent tracking-wider">Live Cricket Book</h4>
                <div className="space-y-3.5">
                  {/* Match Row */}
                  <div className="p-3.5 rounded-2xl bg-bg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold">India vs Pakistan</span>
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-extrabold rounded-md animate-pulse">LIVE</span>
                  </div>
                  {/* Match Row */}
                  <div className="p-3.5 rounded-2xl bg-bg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold">England vs Australia</span>
                    <span className="text-text-muted">Today 18:30</span>
                  </div>
                  {/* Match Row */}
                  <div className="p-3.5 rounded-2xl bg-bg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold">Mumbai vs Chennai</span>
                    <span className="text-text-muted">IPL T20</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                  <span className="text-text-muted">Minimum Deposit: <strong>₹500</strong></span>
                  <span className="text-text-muted">Withdrawal time: <strong>15 Min</strong></span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
