'use client';

import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { MessageSquare, Phone, User, Mail, Send } from 'lucide-react';

export default function ContactForm() {
  const { brand } = useBrand();
  const [formData, setFormData] = useState({ name: '', phone: '', whatsapp: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Please fill out the required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const text = `Hello ${brand.name}, I would like to contact you. Details:\nName: ${formData.name}\nPhone: ${formData.phone || 'N/A'}\nWhatsApp: ${formData.whatsapp}\nMessage: ${formData.message}`;
      const waUrl = `https://wa.me/${brand.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', whatsapp: '', message: '' });
    }, 600);
  };

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest">
                Support Hub
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                Connect With Us 24/7
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Have a question about odds, withdrawal limits, or setting up a multi-tenant betting account? Send us a message and our support team will guide you.
              </p>
            </div>

            <div className="space-y-4 mt-8 pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg border border-slate-800 text-accent">
                  <Phone className="w-4 h-4 fill-current" />
                </span>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Call Support</p>
                  <p className="text-white font-semibold mt-0.5">{brand.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg border border-slate-800 text-[#25D366]">
                  <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                </span>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">WhatsApp Line</p>
                  <p className="text-white font-semibold mt-0.5">{brand.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg border border-slate-800 text-[#0088cc]">
                  <Send className="w-4 h-4 fill-current stroke-none translate-x-[-1px] translate-y-[1px]" />
                </span>
                <div>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Telegram Official</p>
                  <p className="text-white font-semibold mt-0.5">{brand.telegram}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Send an Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter WhatsApp details"
                  className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-text-muted tracking-wider mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full bg-bg border border-slate-800 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-primary placeholder-slate-600 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover active:scale-95 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
