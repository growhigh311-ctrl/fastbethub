'use client';

import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { MessageSquare, Phone, Send, UserPlus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyWhatsApp() {
  const { brand } = useBrand();
  // Build a WhatsApp message URL
  const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello%20${brand.name},%20I%20want%20to%20get%20my%20Online%20Cricket%20ID%20instantly.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:hidden"></span>
      <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 border border-slate-700 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
        Get Instant ID on WhatsApp
      </span>
    </a>
  );
}

export function FloatingContactButtons() {
  const { brand } = useBrand();
  const [showModal, setShowModal] = useState(false);

  const telUrl = `tg://resolve?domain=${brand.telegram.replace('@', '')}`;
  const callUrl = `tel:${brand.phone.replace(/\s/g, '')}`;

  return (
    <>
      <div className="fixed bottom-24 right-6 z-[999] flex flex-col gap-3">
        {/* Telegram Button */}
        <a
          href={telUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 bg-[#0088cc] text-white rounded-full shadow-xl hover:scale-105 transition-transform duration-200 group"
          aria-label="Join Telegram"
        >
          <Send className="w-5 h-5 fill-white stroke-none translate-x-[-1px] translate-y-[1px]" />
          <span className="absolute right-14 bg-slate-900 border border-slate-700 text-white text-[11px] py-1 px-2.5 rounded-md opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            Join Telegram Channel
          </span>
        </a>

        {/* Call Now Button */}
        <a
          href={callUrl}
          className="flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full shadow-xl hover:scale-105 transition-transform duration-200 border border-primary-light/20 group"
          aria-label="Call Support"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="absolute right-14 bg-slate-900 border border-slate-700 text-white text-[11px] py-1 px-2.5 rounded-md opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            Call Live Desk
          </span>
        </a>

        {/* Register Badge */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center w-11 h-11 bg-accent text-text-inverse rounded-full shadow-xl hover:scale-105 transition-transform duration-200 group"
          aria-label="Instant ID Form"
        >
          <UserPlus className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 border border-slate-700 text-white text-[11px] py-1 px-2.5 rounded-md opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-lg font-bold">
            Create ID in 1 Minute
          </span>
        </button>
      </div>

      {/* Instant Registration Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-surface border border-slate-800 rounded-3xl p-6 shadow-2xl text-white font-sans"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 bg-slate-950/50 hover:bg-slate-950 rounded-full text-text-muted hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  Fast Verification
                </span>
                <h3 className="text-xl font-extrabold text-white">Instant Account Creation</h3>
                <p className="text-xs text-text-muted mt-1">Get your cricket ID in under 60 seconds on {brand.name}</p>
              </div>

              <RegistrationForm onSuccess={() => setShowModal(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function RegistrationForm({ onSuccess }) {
  const { brand } = useBrand();
  const [formData, setFormData] = useState({ name: '', phone: '', whatsapp: '', agree: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Please fill in required fields.');
      return;
    }
    
    setIsSubmitting(true);
    // Redirect direct to WhatsApp with credentials
    setTimeout(() => {
      const waText = `Hello ${brand.name}, I want to register a new ID. Details: Name: ${formData.name}, Contact Phone: ${formData.phone || 'N/A'}, WhatsApp No: ${formData.whatsapp}`;
      const url = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(waText)}`;
      window.open(url, '_blank');
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Anurag Kumar"
          className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="e.g. +91 99999 99999"
          className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
          WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          placeholder="e.g. +91 99999 99999"
          className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>

      <div className="flex items-start gap-2.5 py-1.5">
        <input
          type="checkbox"
          id="agree"
          required
          className="mt-0.5 rounded accent-primary bg-bg border-slate-800"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
        />
        <label htmlFor="agree" className="text-[10px] text-text-muted select-none leading-relaxed">
          I certify that I am 18+ years of age and agree to the Terms of Service & Privacy Policy of {brand.name}.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover active:scale-95 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <>
            <MessageSquare className="w-4 h-4 fill-current stroke-none" />
            <span>Get WhatsApp ID Instantly</span>
          </>
        )}
      </button>
    </form>
  );
}
