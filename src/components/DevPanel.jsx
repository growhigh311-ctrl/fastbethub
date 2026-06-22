'use client';

import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { brandsList, brandsData } from '../config/brands/index.js';
import { Settings, Check, Globe, RefreshCw } from 'lucide-react';

export default function DevPanel() {
  const { brand, changeBrandPreview } = useBrand();
  const [isOpen, setIsOpen] = useState(false);

  // Hide in production builds
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const resetPreview = () => {
    localStorage.removeItem('reddy_preview_brand');
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('brand');
    window.location.href = newUrl.origin + newUrl.pathname;
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl border border-slate-700 transition-all duration-300 hover:scale-105"
      >
        <Settings className={`w-5 h-5 text-yellow-400 ${isOpen ? 'animate-spin' : ''}`} />
        <span className="text-xs font-semibold tracking-wide">Preview Sites ({brandsList.length})</span>
      </button>

      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 w-80 max-h-[80vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 text-white animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div>
              <h3 className="font-bold text-sm tracking-wide text-white">Brand Switcher</h3>
              <p className="text-[10px] text-slate-400">Click to switch themes & content instantly</p>
            </div>
            <button
              onClick={resetPreview}
              title="Reset to Hostname Detection"
              className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {brandsList.map((brandId) => {
              const b = brandsData[brandId];
              const isActive = b.id === brand.id;

              return (
                <button
                  key={b.id}
                  onClick={() => changeBrandPreview(b.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 border ${
                    isActive
                      ? 'bg-slate-800 border-yellow-500/50 shadow-lg'
                      : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Visual Color Swatch */}
                    <div className="flex -space-x-1">
                      <span className={`w-3.5 h-3.5 rounded-full border border-slate-900`} style={{ backgroundColor: getSwatchColors(b.id)[0] }} />
                      <span className={`w-3.5 h-3.5 rounded-full border border-slate-900`} style={{ backgroundColor: getSwatchColors(b.id)[1] }} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white leading-tight">{b.name}</p>
                      <p className="text-[9px] text-slate-400 leading-none">{b.color}</p>
                    </div>
                  </div>
                  {isActive ? (
                    <Check className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Globe className="w-3.5 h-3.5 text-slate-600 hover:text-slate-400" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[9px] text-slate-400 text-center">
            Currently displaying: <strong className="text-yellow-400">{brand.name}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

// Map brands to CSS Swatches
function getSwatchColors(brandId) {
  switch (brandId) {
    case 'kingexchange247': return ['#0056b3', '#ffd700'];
    case 'tigerbook365': return ['#ff6a00', '#1a1a1a'];
    case 'royalcricketid': return ['#8a2be2', '#ffffff'];
    case 'fastbethub': return ['#10b981', '#1f2937'];
    case 'diamondplay99': return ['#00f0ff', '#001d3d'];
    case 'primesportsbook': return ['#dc2626', '#171717'];
    case 'victoryexchange': return ['#14b8a6', '#ffffff'];
    case 'superbetzone': return ['#eab308', '#1e3a8a'];
    case 'goldcricketbook': return ['#d4af37', '#121212'];
    case 'elitegamingid': return ['#581c87', '#cbd5e1'];
    default: return ['#ffffff', '#000000'];
  }
}
