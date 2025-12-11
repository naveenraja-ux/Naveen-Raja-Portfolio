

import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SOCIALS } from '../constants';
import { Mail, MapPin, Phone, ArrowUpRight, Copy, Check, MessageSquare, Globe, Send, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const ContactVisual = () => {
  const [activeRing, setActiveRing] = useState(0);
  useEffect(() => { const interval = setInterval(() => { setActiveRing(prev => (prev + 1) % 3); }, 2000); return () => clearInterval(interval); }, []);
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/10 rounded-full blur-[80px] animate-pulse"></div>
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <div className={`absolute inset-0 rounded-full border border-dashed transition-all duration-1000 ${activeRing === 0 ? 'border-indigo-500/50 scale-100 rotate-0' : 'border-slate-300/30 dark:border-white/10 scale-95 rotate-12'}`}><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div></div>
        <div className={`absolute inset-12 rounded-full border border-dashed transition-all duration-1000 ${activeRing === 1 ? 'border-fuchsia-500/50 scale-100 -rotate-0' : 'border-slate-300/30 dark:border-white/10 scale-95 -rotate-45'}`}><div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,1)]"></div></div>
        <div className={`absolute inset-24 rounded-full border border-dashed transition-all duration-1000 ${activeRing === 2 ? 'border-emerald-500/50 scale-100 rotate-0' : 'border-slate-300/30 dark:border-white/10 scale-95 rotate-90'}`}><div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)]"></div></div>
        <div className="absolute inset-0 m-auto w-32 h-32 bg-white dark:bg-[#1A1A1A] rounded-full shadow-2xl border border-slate-100 dark:border-white/10 flex items-center justify-center z-10 animate-float">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 rounded-full"></div>
           <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center shadow-inner group cursor-pointer hover:scale-110 transition-transform duration-300"><Mail className="text-white drop-shadow-md animate-bounce-gentle" size={32} /><div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div></div>
        </div>
        <div className="absolute top-0 right-10 p-3 bg-white dark:bg-[#202020] rounded-xl shadow-lg border border-slate-100 dark:border-white/5 animate-float" style={{ animationDelay: '1s' }}><MessageSquare size={18} className="text-indigo-500" /></div>
        <div className="absolute bottom-10 left-0 p-3 bg-white dark:bg-[#202020] rounded-xl shadow-lg border border-slate-100 dark:border-white/5 animate-float" style={{ animationDelay: '2s' }}><Globe size={18} className="text-fuchsia-500" /></div>
        <div className="absolute bottom-0 right-20 p-3 bg-white dark:bg-[#202020] rounded-xl shadow-lg border border-slate-100 dark:border-white/5 animate-float" style={{ animationDelay: '3s' }}><Send size={18} className="text-emerald-500" /></div>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => { navigator.clipboard.writeText(CONTACT_INFO.email); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 dark:bg-[#050505] transition-colors relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <Reveal>
                <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-sm"><Sparkles size={14} /><span>Get in touch</span></div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight">Let's create something <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">extraordinary.</span></h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">I’m currently open to freelance projects and full-time opportunities. Whether you have a groundbreaking idea or just want to chat about design, I'm all ears.</p>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="space-y-6">
                <div onClick={handleCopyEmail} className="group w-full md:w-auto inline-flex items-center gap-4 p-4 pr-6 bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform"><Mail size={24} /></div>
                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Mail me at</div><div className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{CONTACT_INFO.email}</div></div>
                    <div className="ml-auto pl-4 border-l border-slate-100 dark:border-white/10">{copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />}</div>
                </div>
                
                {/* Phone & Location Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-transparent rounded-2xl border border-transparent">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400"><Phone size={18} /></div>
                      <div className="text-slate-600 dark:text-slate-400 font-medium">{CONTACT_INFO.phone}</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-transparent rounded-2xl border border-transparent">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400"><MapPin size={18} /></div>
                      <div className="text-slate-600 dark:text-slate-400 font-medium">{CONTACT_INFO.location}</div>
                  </div>
                </div>

                </div>
            </Reveal>
            <Reveal delay={400}>
                <div className="pt-8 border-t border-slate-200 dark:border-white/5">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Social Connections</div>
                <div className="flex gap-4">
                    {SOCIALS.map(social => (
                        <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#151515] text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all flex items-center gap-2 shadow-sm hover:shadow-lg">{social.platform} <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white dark:group-hover:text-slate-900 transition-colors" /></a>
                    ))}
                </div>
                </div>
            </Reveal>
          </div>
          <Reveal delay={300} className="h-full">
            <div className="relative h-full min-h-[400px] bg-slate-100 dark:bg-[#101010] rounded-[2.5rem] border border-slate-200 dark:border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <ContactVisual />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/80 dark:bg-[#202020]/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-white/10 flex items-center gap-2 shadow-lg"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div><span className="text-xs font-bold text-slate-700 dark:text-slate-200">Available for new projects</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
