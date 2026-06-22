'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useBrand } from '../context/BrandContext.jsx';
import SEO from '../components/SEO.jsx';
import { Trophy, HelpCircle, ShieldAlert, Award, Star, MessageSquare } from 'lucide-react';

export default function Services() {
  const pathname = usePathname();
  const { brand } = useBrand();

  const path = pathname;

  // Determine active service details
  let serviceKey = 'cricketId';
  let title = 'Online Cricket ID';
  let tagline = 'Get your official cricket wagering account instantly.';
  let icon = <Trophy className="w-12 h-12 text-accent" />;
  let intro = '';
  let stepsTitle = 'Steps to Get Started';
  let steps = [];

  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20get%20my%20Online%20Cricket%20ID%20instantly.`;

  if (path === '/cricket-id') {
    serviceKey = 'cricketId';
    title = 'Online Cricket ID';
    tagline = `Verified gaming profiles from India's trusted exchange.`;
    intro = `Welcome to the official ${brand.name} portal, where you can register and receive your online cricket ID in under 2 minutes. We support instant, direct transfers via local payment networks, providing an authenticated workspace to bet on IPL, World Cup fixtures, and local leagues.`;
    steps = [
      'Message our verified support representative on WhatsApp.',
      'Deposit your preferred starting balance (minimum ₹500).',
      'Receive your secure gaming profile ID, password, and URL link.',
      'Log in to start trading on sports fixtures and live casino halls.'
    ];
  } else if (path === '/sports-betting') {
    serviceKey = 'sportsBetting';
    title = 'Sports Betting';
    tagline = 'Highest market odds across global sports fixtures.';
    intro = `Explore our comprehensive sportsbook at ${brand.name}. We host live wagers on Cricket matches, Football leagues, Tennis tours, Kabaddi, and virtual sports. Get live scores, point updates, and cashout options to lock in profits anytime.`;
    steps = [
      'Register your sports ID via our WhatsApp line.',
      'Log in to search live sports markets.',
      'Place bets on back/lay odds with real-time tracking.',
      'Request direct 15-minute cashouts for your winnings.'
    ];
  } else if (path === '/casino') {
    serviceKey = 'casino';
    title = 'Casino Games';
    tagline = 'Mobile-first virtual casino tables and slots.';
    intro = `Enjoy hundreds of premium casino games on ${brand.name}. From roulette simulations to card lobbies, our digital casino hall is lightweight, fast-loading, and fully optimized for iOS and Android web browsers.`;
    steps = [
      'Acquire your dynamic casino login ID.',
      'Load credits securely on WhatsApp.',
      'Browse through hundreds of virtual tables and slot configurations.',
      'Cash out wins instantly with zero handling fees.'
    ];
  } else if (path === '/live-casino') {
    serviceKey = 'liveCasino';
    title = 'Live Casino Lobby';
    tagline = 'Real-time dealers, high limits, absolute transparency.';
    intro = `Step into the live dealer lobby of ${brand.name}. Stream real-time Andar Bahar, Roulette, Blackjack, and Baccarat with high-definition cameras and interact with live human dealers for an authentic casino experience.`;
    steps = [
      'Get your live dealer credential ID.',
      'Fund your chips balance with flexible UPI methods.',
      'Enter the live dealer rooms of your choice.',
      'Withdraw profits instantly to your bank account.'
    ];
  } else if (path === '/teen-patti') {
    serviceKey = 'teenPatti';
    title = 'Live Teen Patti';
    tagline = 'Traditional Indian card games with real-time dealers.';
    intro = `Play India's favorite card games: Live Teen Patti and Andar Bahar on ${brand.name}. Join low-stake or high-stake tables, utilize special side bets, and compete in standard configurations with rapid payout options.`;
    steps = [
      'Connect with us on WhatsApp to register your Teen Patti ID.',
      'Select local payment apps to deposit chips.',
      'Join live dealer rooms for Teen Patti or Andar Bahar.',
      'Enjoy 15-minute cashouts on all winning sessions.'
    ];
  } else if (path === '/slots') {
    serviceKey = 'slots';
    title = 'Online Slots';
    tagline = 'Spin high-RTP slot reels with huge multipliers.';
    intro = `Browse through hundreds of colorful slot configurations on ${brand.name}. Enjoy classic fruit machines, video reels, and progressive jackpots from verified providers with high payout percentages.`;
    steps = [
      'Request your slot gaming profile ID on WhatsApp.',
      'Fund your wallet with any amount starting from ₹500.',
      'Spin reels on themes ranging from ancient empires to modern jackpots.',
      'Convert slot winnings into real cash instantly.'
    ];
  } else if (path === '/exchange') {
    serviceKey = 'exchange';
    title = 'Cricket Exchange';
    tagline = 'Peer-to-peer back & lay betting with low commissions.';
    intro = `Experience authentic exchange betting at ${brand.name}. Set your own odds, back or lay outcomes (bet against an outcome), and trade positions mid-match to manage risk and lock in returns.`;
    steps = [
      'Register for a Cricket Exchange account on WhatsApp.',
      'Load credits into your secure trading wallet.',
      'Set back or lay wagers on live high-liquidity matches.',
      'Cash out instantly with payouts processed inside 15 minutes.'
    ];
  }

  return (
    <div className="py-16 md:py-24 bg-bg">
      <SEO pageKey={serviceKey} breadcrumbName={title} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="p-8 md:p-12 rounded-3xl bg-surface border border-slate-800 shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-[-20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary-light/5 blur-[50px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-bg border border-slate-800 flex items-center justify-center mb-2">
              {icon}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h1>
            <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider">{tagline}</p>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed pt-2">{intro}</p>

            <div className="pt-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-3.5 px-8 rounded-xl transition-all duration-200 active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                <span>Get {title} ID Instantly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Steps and Security Section */}
        <div className="grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-text-muted leading-relaxed">
          {/* Steps */}
          <div className="p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">{stepsTitle}</h3>
            <ul className="space-y-3.5">
              {steps.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary border border-primary/10 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security and Policies */}
          <div className="p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white tracking-wide">Credibility & Protections</h3>
              <p className="text-xs">
                Our servers run 256-bit SSL certificate configurations, ensuring transactional safety and login privacy. All payouts are transferred directly on WhatsApp via verified local Indian banking networks.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Active 24/7/365 WhatsApp Helpdesk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>10-15 Minutes Payout Speed Guarantee</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
