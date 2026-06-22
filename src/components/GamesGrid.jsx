'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Trophy, Target, Activity, Calendar, HelpCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GamesGrid() {
  const { brand } = useBrand();

  const games = [
    {
      id: 'cricket',
      title: 'Cricket Exchange',
      tagline: 'Lowest commission, highest odds.',
      desc: `Bet on the IPL, Test series, ODI, and international tournaments on India's premier cricket exchange with lay-and-back options.`,
      icon: <Trophy className="w-6 h-6 text-accent" />,
      tag: 'Popular'
    },
    {
      id: 'football',
      title: 'Football Betting',
      tagline: 'Global leagues coverage.',
      desc: 'Predict football scores and outcomes across major tournaments including Premier League, Champions League, and FIFA matches.',
      icon: <Target className="w-6 h-6 text-accent" />,
      tag: 'Leagues'
    },
    {
      id: 'tennis',
      title: 'Tennis Betting',
      tagline: 'ATP & WTA matches.',
      desc: 'Get real-time court wagers on major Grand Slams, ATP Tours, and live game-by-game statistics.',
      icon: <Activity className="w-6 h-6 text-accent" />,
      tag: 'Live'
    },
    {
      id: 'casino',
      title: 'Live Casino Rooms',
      tagline: 'Real human dealers.',
      desc: 'Play Live Roulette, Baccarat, and Blackjack with full streaming, high limits, and real-time dealer interactions.',
      icon: <Eye className="w-6 h-6 text-accent" />,
      tag: 'VIP'
    },
    {
      id: 'teen-patti',
      title: 'Teen Patti & Card Games',
      tagline: 'Traditional Indian card rooms.',
      desc: 'Compete in live Andar Bahar, Teen Patti, and poker lobbies optimized for mobile play with seamless credit transfers.',
      icon: <Calendar className="w-6 h-6 text-accent" />,
      tag: 'Hot'
    },
    {
      id: 'slots',
      title: 'Online Slot Games',
      tagline: 'High RTP slot reels.',
      desc: 'Spin hundreds of slot configurations, including classic fruit machines, video reels, and progressive jackpots.',
      icon: <HelpCircle className="w-6 h-6 text-accent" />,
      tag: 'Jackpot'
    }
  ];

  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20get%20my%20Online%20Cricket%20ID%20instantly.`;

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Explore Lobby
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Sportsbook & Live Casino Lobbies
          </h2>
          <p className="text-sm text-text-muted mt-3">
            Register once and gain access to an array of sports wagering exchanges and live card dealer hubs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative overflow-hidden p-6 rounded-3xl bg-surface border border-slate-800/80 shadow-lg flex flex-col justify-between hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Corner Tag */}
              <span className="absolute top-4 right-4 z-10 px-2 py-0.5 bg-slate-900 border border-slate-800 text-accent text-[9px] font-bold rounded">
                {game.tag}
              </span>

              <div>
                <div className="w-12 h-12 rounded-xl bg-bg border border-slate-800/80 flex items-center justify-center mb-5">
                  {game.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {game.title}
                </h3>
                <p className="text-[10px] text-accent font-semibold tracking-wider uppercase mt-1 mb-3">
                  {game.tagline}
                </p>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {game.desc}
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-bg hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-bold py-3 px-5 rounded-xl transition-all duration-200 text-xs uppercase tracking-wider group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                Get ID to Play
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
