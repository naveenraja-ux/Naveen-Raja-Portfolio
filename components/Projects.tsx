
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project, CaseStudySection } from '../types';
import { Reveal } from './Reveal';
import { 
  X, ExternalLink, CheckCircle2, ArrowRight, Layers, Smartphone, Layout, 
  BarChart3, Search, Globe, MousePointer2, Loader2, Check, Heart, User, 
  TrendingUp, Zap, Trophy, Crown, Users, Sparkles, MessageCircle, ArrowUpRight,
  Briefcase, Grid as GridIcon, List as ListIcon, MapPin, Camera, Music, Calendar,
  Activity, DollarSign, Bell, Settings, Sun, Moon, Gamepad2, Timer, Filter, SlidersHorizontal,
  Map, ShoppingBag, Plus, Star, Image as ImageIcon, ChevronRight, Menu, Battery, Wifi
} from 'lucide-react';

// --- VISUAL COMPONENTS (TechCard Animations) ---

const DomainMarktVisual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-100 dark:bg-[#0F0F0F] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent_70%)]"></div>
      <div className="relative w-64 h-40 bg-white dark:bg-[#1A1A1A] rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-700 hover:scale-105 hover:shadow-indigo-500/20">
        <div className="h-8 border-b border-slate-100 dark:border-white/5 flex items-center px-3 gap-2 bg-slate-50 dark:bg-[#202020]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
          <div className="flex-1"></div>
          <div className="w-16 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full"></div>
        </div>
        <div className="flex-1 p-4 relative">
          <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg flex items-center px-3 gap-2 transition-all duration-500 ${step >= 1 ? '-translate-y-4 scale-90 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <Search size={14} className="text-slate-400" />
            <div className="flex-1 relative h-full flex items-center overflow-hidden">
               <span className="text-xs text-slate-800 dark:text-slate-200 font-mono">
                 naveen.design
                 <span className="animate-blink-caret border-r border-indigo-500 ml-0.5 h-3 inline-block align-middle"></span>
               </span>
            </div>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${step === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
             <Loader2 size={24} className="text-indigo-500 animate-spin" />
          </div>
          <div className={`absolute inset-x-4 top-4 space-y-2 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="w-full p-2 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-lg flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                      <Check size={10} className="text-emerald-600 dark:text-emerald-400" />
                   </div>
                   <div className="h-2 w-20 bg-emerald-200 dark:bg-emerald-500/30 rounded"></div>
                </div>
                <div className="h-6 px-2 bg-emerald-500 rounded text-[9px] font-bold text-white flex items-center shadow-lg shadow-emerald-500/20">BUY</div>
             </div>
             <div className="w-full p-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-lg flex items-center justify-between opacity-50">
                <div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded"></div>
                <div className="h-2 w-8 bg-slate-200 dark:bg-white/10 rounded"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HobbyMateVisual = () => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => { setLiked(prev => !prev); }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-rose-50 to-orange-50 dark:from-[#1a0505] dark:to-[#1a0f05] flex items-center justify-center">
      <Heart className={`absolute top-4 right-8 text-rose-200 dark:text-rose-900/20 transition-all duration-1000 ${liked ? 'scale-150 -translate-y-4 opacity-0' : 'scale-100 opacity-100'}`} size={40} fill="currentColor" />
      <Heart className={`absolute bottom-8 left-8 text-orange-200 dark:text-orange-900/20 transition-all duration-1000 delay-100 ${liked ? 'scale-125 -translate-y-8 opacity-0' : 'scale-75 opacity-100'}`} size={24} fill="currentColor" />
      <div className="relative w-48 h-60">
        <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-[#202020] rounded-2xl shadow-lg border border-slate-200 dark:border-white/5 transform transition-all duration-500 origin-bottom ${liked ? 'scale-100 rotate-0 translate-y-0 z-20' : 'scale-95 rotate-3 translate-y-2 z-10'}`}>
          <div className="h-2/3 bg-slate-100 dark:bg-white/5 rounded-t-2xl relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center"><User size={32} className="text-slate-300 dark:text-white/20" /></div>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-3 w-1/2 bg-slate-200 dark:bg-white/20 rounded"></div>
            <div className="flex gap-1">
               <div className="h-4 w-10 bg-orange-100 dark:bg-orange-500/20 rounded-full"></div>
               <div className="h-4 w-8 bg-rose-100 dark:bg-rose-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-[#252525] rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 transform transition-all duration-700 origin-bottom-right z-30 ${liked ? 'translate-x-[150%] rotate-12 opacity-0' : 'translate-x-0 rotate-0 opacity-100'}`}>
           <div className="h-2/3 bg-gradient-to-b from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 rounded-t-2xl relative">
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/50 backdrop-blur rounded-full text-[10px] font-bold text-rose-600">98% Match</div>
           </div>
           <div className="p-3">
              <div className="h-4 w-2/3 bg-slate-800 dark:bg-white/80 rounded mb-2"></div>
              <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded"></div>
           </div>
           <div className={`absolute top-8 left-8 border-4 border-emerald-500 text-emerald-500 rounded px-2 py-1 font-black text-2xl uppercase tracking-widest opacity-0 transform -rotate-12 transition-all duration-300 ${liked ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}>Like</div>
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white dark:bg-[#151515] px-6 py-3 rounded-xl shadow-2xl border border-rose-100 dark:border-rose-900/30 flex items-center gap-3 transition-all duration-500 ${liked ? 'scale-100 opacity-100 delay-300' : 'scale-50 opacity-0'}`}>
           <div className="relative">
             <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-white dark:border-[#151515] relative z-10"></div>
             <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white dark:border-[#151515] absolute top-0 left-5"></div>
           </div>
           <div><div className="text-xs font-bold text-rose-500">It's a Match!</div></div>
        </div>
      </div>
    </div>
  );
};

const PowerVolatilityVisual = () => {
  const [dataPoints, setDataPoints] = useState([40, 60, 45, 70, 55, 80, 65]);
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => [...prev.slice(1), Math.floor(Math.random() * 40) + 40]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-50 dark:bg-[#080F0D] flex items-center justify-center">
       <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
       <div className="w-64 bg-white dark:bg-[#121A16] rounded-xl shadow-lg border border-slate-100 dark:border-emerald-500/20 p-4 relative z-10">
          <div className="flex justify-between items-start mb-6">
             <div>
               <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ETH / USD</div>
               <div className="text-xl font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                 $3,420.50
                 <span className="text-[10px] px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded flex items-center"><TrendingUp size={10} className="mr-1" /> +2.4%</span>
               </div>
             </div>
          </div>
          <div className="h-24 flex items-end justify-between gap-1 relative">
             {dataPoints.map((h, i) => (
               <div key={i} className={`w-full rounded-t-sm transition-all duration-700 ease-in-out ${i === 6 ? 'bg-emerald-500 animate-pulse' : 'bg-slate-200 dark:bg-white/10'}`} style={{ height: `${h}%` }}>
                  {i === 6 && <div className="absolute -top-8 right-0 bg-emerald-600 text-white text-[9px] px-2 py-1 rounded shadow-lg font-bold">Buy</div>}
               </div>
             ))}
             <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                   <path d={`M ${dataPoints.map((p, i) => `${i * (100/6)}% ${100 - p}%`).join(' L ')}`} fill="none" stroke="#10B981" strokeWidth="2" className="opacity-50" />
                </svg>
             </div>
          </div>
          <div className="absolute -right-6 bottom-4 bg-emerald-500 text-white px-3 py-2 rounded-l-lg shadow-lg flex items-center gap-2 text-xs font-bold animate-bounce-gentle">
             <Zap size={12} fill="currentColor" /> Signal
          </div>
       </div>
    </div>
  );
};

const PlayZoneVisual = () => {
  const [winner, setWinner] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => { setWinner(prev => !prev); }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0a0a0f] flex items-center justify-center">
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-600/20 blur-[60px]"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-fuchsia-600/20 blur-[60px]"></div>
      <div className="relative z-10 w-64 flex flex-col items-center gap-6">
         <div className={`relative transition-all duration-700 ${winner ? 'scale-110 opacity-100' : 'scale-90 opacity-50'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.4)]">
               <Trophy size={32} className="text-white drop-shadow-md" />
            </div>
            {winner && <Crown size={24} className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-300 animate-bounce" fill="currentColor" />}
            {winner && <div className="absolute inset-0 rounded-full animate-ping border border-yellow-400 opacity-50"></div>}
         </div>
         <div className="w-full flex justify-center h-12 relative">
             <div className="absolute bottom-0 left-8 w-[calc(50%-2rem)] h-full border-r-2 border-t-2 border-slate-700 rounded-tr-xl"></div>
             <div className="absolute bottom-0 right-8 w-[calc(50%-2rem)] h-full border-l-2 border-t-2 border-slate-700 rounded-tl-xl"></div>
             <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-purple-500 to-yellow-500 transition-all duration-1000 ease-out ${winner ? 'h-full' : 'h-0'}`}></div>
         </div>
         <div className="w-full flex justify-between px-4">
             <div className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-500 ${winner ? 'bg-slate-800/50 border-slate-700 opacity-50' : 'bg-purple-900/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]'}`}>
                <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">A</div>
                <div className="h-2 w-12 bg-purple-500/20 rounded"></div>
             </div>
             <div className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-500 ${winner ? 'bg-yellow-900/20 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)] scale-105' : 'bg-slate-800/50 border-slate-700 opacity-50'}`}>
                <div className="w-6 h-6 rounded bg-yellow-500 flex items-center justify-center text-[10px] font-bold text-white">B</div>
                <div className="h-2 w-12 bg-yellow-500/20 rounded"></div>
             </div>
         </div>
      </div>
    </div>
  );
};

// --- MODAL SPECIFIC VISUALS ---

// 1. Dynamic Hero Background Animation
const ModalHeroAnimation = ({ project }: { project: Project }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Domain Markt: High-Fidelity 3D Market Grid */}
      {project.id === 'domain-markt' && (
        <div className="absolute inset-0 overflow-hidden perspective-1000">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-40"></div>
           {/* Moving Floor Grid */}
           <div className="absolute inset-[-50%] opacity-20 animate-[gridFlow_20s_linear_infinite]" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', 
                  backgroundSize: '80px 80px',
                  transform: 'rotateX(60deg) translateY(0)',
                }}>
           </div>
           
           {/* Floating Nodes (Domains) */}
           {[...Array(6)].map((_, i) => (
             <div key={i} className="absolute w-24 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center animate-float shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDuration: `${4 + Math.random() * 4}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}>
                <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left rotate-45 -z-10"></div>
             </div>
           ))}

           {/* Data Packets */}
           <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-white/50 to-transparent animate-[shine_3s_infinite]"></div>
        </div>
      )}

      {/* HobbyMate: Social Mesh & Connections */}
      {project.id === 'hobbymate' && (
        <div className="absolute inset-0 overflow-hidden">
           {/* Connecting Lines Mesh */}
           <div className="absolute inset-0 opacity-20">
             <svg className="w-full h-full animate-[spin_60s_linear_infinite]">
                <circle cx="50%" cy="50%" r="30%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 20" />
                <circle cx="50%" cy="50%" r="50%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 30" opacity="0.5" />
             </svg>
           </div>
           
           {/* Floating Bubbles / Nodes */}
           {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-white/10 backdrop-blur border border-white/30 animate-float flex items-center justify-center"
                   style={{
                     width: `${Math.random() * 60 + 40}px`,
                     height: `${Math.random() * 60 + 40}px`,
                     top: `${Math.random() * 80 + 10}%`,
                     left: `${Math.random() * 80 + 10}%`,
                     animationDuration: `${Math.random() * 5 + 5}s`,
                     animationDelay: `${Math.random() * 2}s`
                   }}>
                   {/* Mini Pulse */}
                   <div className="w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
              </div>
           ))}
        </div>
      )}

      {/* PowerVolatility: Financial Matrix & Data Stream */}
      {project.id === 'power-volatility' && (
         <div className="absolute inset-0 flex justify-between px-10 opacity-20 overflow-hidden">
            {/* Falling Matrix Code */}
            {[...Array(12)].map((_, i) => (
               <div key={i} className="relative w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-[shine_3s_linear_infinite]"
                    style={{ animationDuration: `${Math.random() * 2 + 2}s`, animationDelay: `${Math.random() * 2}s`, height: '150%', opacity: Math.random() }}>
                    <div className="absolute bottom-0 -left-1 text-[10px] text-emerald-300 font-mono rotate-90">{Math.random() > 0.5 ? '1' : '0'}</div>
               </div>
            ))}
            
            {/* Horizontal Tickers */}
            <div className="absolute top-1/4 left-0 w-full h-12 flex items-center opacity-30 animate-marquee whitespace-nowrap gap-8">
               {[...Array(10)].map((_, i) => <div key={i} className="text-xl font-mono font-bold text-emerald-200">BTC +2.5%</div>)}
            </div>
             <div className="absolute bottom-1/4 left-0 w-full h-12 flex items-center opacity-30 animate-marquee-reverse whitespace-nowrap gap-8">
               {[...Array(10)].map((_, i) => <div key={i} className="text-xl font-mono font-bold text-emerald-200">ETH -1.2%</div>)}
            </div>
         </div>
      )}

      {/* PlayZone: Neon Cyber Grid */}
      {project.id === 'playzone' && (
         <div className="absolute inset-0 overflow-hidden" style={{ perspective: '600px' }}>
            {/* Moving Floor */}
            <div className="absolute inset-[-50%] opacity-40" 
                 style={{ 
                   transform: 'rotateX(60deg) scale(2)', 
                   backgroundImage: 'linear-gradient(transparent 95%, #d946ef 95%), linear-gradient(90deg, transparent 95%, #d946ef 95%)', 
                   backgroundSize: '80px 80px', 
                   animation: 'gridFlow 15s linear infinite' 
                 }}></div>
            
            {/* Horizon Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-fuchsia-900 to-transparent"></div>
            
            {/* Scanning Laser */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-fuchsia-500 shadow-[0_0_20px_#d946ef] animate-[bounceGentle_4s_infinite]"></div>

            {/* Floating Geometry */}
            <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-fuchsia-500 rounded animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-purple-500 border-r-[30px] border-r-transparent animate-float"></div>
         </div>
      )}

    </div>
  );
};

// --- DOMAIN MARKT VISUALS ---

const GalleryVisual = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  useEffect(() => { const interval = setInterval(() => { setView(v => v === 'grid' ? 'list' : 'grid'); }, 3000); return () => clearInterval(interval); }, []);

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 p-8 flex flex-col gap-6 relative overflow-hidden group">
      
      {/* View Switcher with Elastic Animation */}
      <div className="flex justify-between items-center z-10">
        <div className="relative flex gap-0 bg-white dark:bg-black/20 rounded-lg border border-slate-200 dark:border-white/5 p-1">
           <div className={`absolute top-1 bottom-1 w-[36px] bg-indigo-500 rounded shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${view === 'grid' ? 'left-1' : 'left-[44px]'}`}></div>
           <button className={`relative z-10 p-2 rounded transition-colors duration-300 ${view === 'grid' ? 'text-white' : 'text-slate-400'}`}><GridIcon size={16} /></button>
           <button className={`relative z-10 p-2 rounded transition-colors duration-300 ${view === 'list' ? 'text-white' : 'text-slate-400'}`}><ListIcon size={16} /></button>
        </div>
        <div className="h-2 w-20 bg-slate-200 dark:bg-white/10 rounded"></div>
      </div>

      {/* Staggered Content Area */}
      <div className="relative flex-1">
        <div className={`grid gap-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${view === 'grid' ? 'grid-cols-3' : 'grid-cols-1'}`}>
           {[1,2,3,4,5,6].slice(0, view === 'grid' ? 6 : 4).map((i) => (
             <div 
               key={i} 
               className={`bg-white dark:bg-[#202020] rounded-xl border border-slate-200 dark:border-white/5 p-3 shadow-sm flex transition-all duration-500 hover:scale-[1.02] hover:shadow-md ${view === 'list' ? 'flex-row items-center gap-4' : 'flex-col gap-3'}`}
               style={{ transitionDelay: `${i * 50}ms` }}
             >
                <div className={`bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5 rounded-lg transition-all duration-700 ${view === 'grid' ? 'w-full aspect-[4/3]' : 'w-12 h-12'}`}></div>
                <div className="flex-1 space-y-2 min-w-0">
                   <div className="h-3 w-3/4 bg-slate-200 dark:bg-white/10 rounded"></div>
                   <div className="h-2 w-1/2 bg-slate-100 dark:bg-white/5 rounded"></div>
                </div>
                {view === 'list' && <div className="h-6 w-16 bg-emerald-50 dark:bg-emerald-500/10 rounded-full ml-auto"></div>}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const ListedDomainsVisual = () => {
  const [activeRow, setActiveRow] = useState(1);
  useEffect(() => {
     const interval = setInterval(() => { setActiveRow(prev => (prev + 1) % 4); }, 2000);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-white dark:bg-[#121212] rounded-xl border border-slate-200 dark:border-white/5 p-0 overflow-hidden relative flex flex-col">
       {/* Header */}
       <div className="h-12 border-b border-slate-100 dark:border-white/5 flex items-center px-6 gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50 dark:bg-white/5">
          <div className="w-8">#</div>
          <div className="flex-1">Domain Name</div>
          <div className="w-20 text-right">Price</div>
          <div className="w-20 text-right">Status</div>
       </div>

       {/* Animated Rows */}
       <div className="flex-1 p-4 space-y-2">
          {[
            { id: 1, name: 'finance.io', price: '$24,000', status: 'Active' },
            { id: 2, name: 'cloud.net', price: '$12,500', status: 'Offer' },
            { id: 3, name: 'design.studio', price: '$8,900', status: 'Sold' },
            { id: 4, name: 'app.xyz', price: '$1,200', status: 'Active' },
          ].map((item, i) => (
             <div 
               key={item.id} 
               className={`flex items-center px-4 py-3 rounded-lg border transition-all duration-500 ${activeRow === i ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30 shadow-sm scale-[1.02]' : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5'}`}
             >
                <div className="w-8 text-slate-400 text-xs">{i + 1}</div>
                <div className="flex-1 flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500"><Globe size={12} /></div>
                   <span className="font-mono text-sm font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
                </div>
                <div className="w-20 text-right font-bold text-slate-900 dark:text-white text-sm">{item.price}</div>
                <div className="w-20 flex justify-end">
                   <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.status === 'Active' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      item.status === 'Offer' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 animate-pulse' :
                      'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'
                   }`}>{item.status}</span>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

const DashboardVisual = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => { setCount(c => c < 100 ? c + 1 : 0); }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="w-full h-full bg-slate-50 dark:bg-[#0F0F0F] rounded-xl border border-slate-200 dark:border-white/5 p-6 flex flex-col gap-6 relative overflow-hidden">
        {/* Top Cards */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
           <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm group hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-2">
                 <div className="text-xs text-slate-400">Total Revenue</div>
                 <ArrowUpRight size={14} className="text-emerald-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">$42,500</div>
              <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-500 w-[65%] rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/30 animate-[shine_1s_infinite]"></div>
                 </div>
              </div>
           </div>
           <div className="bg-white dark:bg-[#1A1A1A] p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm group hover:-translate-y-1 transition-transform">
              <div className="text-xs text-slate-400 mb-2">Active Offers</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                 18<span className="text-sm text-slate-400 font-normal">/24</span>
              </div>
              <div className="flex gap-0.5 h-8 items-end">
                 {[30, 50, 40, 70, 50, 80, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all duration-300" style={{ height: `${h}%`, transitionDelay: `${i*50}ms` }}></div>
                 ))}
              </div>
           </div>
        </div>
        
        {/* Animated Chart Area */}
        <div className="flex-1 bg-white dark:bg-[#1A1A1A] rounded-xl border border-slate-100 dark:border-white/5 p-4 relative overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
               {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-50 dark:bg-white/5"></div>)}
            </div>
            {/* SVG Curve */}
            <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
               <path 
                 d="M0,50 C20,40 30,10 50,25 S80,40 100,10" 
                 fill="none" 
                 stroke="#6366f1" 
                 strokeWidth="2" 
                 strokeDasharray="200"
                 strokeDashoffset="0"
                 className="animate-[dash_3s_ease-in-out_infinite_alternate]"
               />
               <path 
                 d="M0,50 C20,40 30,10 50,25 S80,40 100,10 L100,50 L0,50 Z" 
                 fill="url(#gradient)" 
                 className="opacity-20"
               />
               <defs>
                 <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                   <stop offset="0%" stopColor="#6366f1" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
            </svg>
            
            {/* Scanning Tooltip */}
            <div className="absolute top-0 bottom-0 w-px bg-indigo-500/20 left-[50%] animate-[scan_4s_linear_infinite_alternate]">
               <div className="absolute top-[25%] -translate-x-1/2 bg-indigo-600 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  Views: {200 + count}
               </div>
               <div className="absolute top-[25%] -translate-x-1/2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white dark:border-[#1A1A1A]"></div>
            </div>
        </div>
     </div>
  );
};

const FeatureHighlightVisual = () => {
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 p-8 flex items-center justify-center relative overflow-hidden">
       {/* Filter Simulation */}
       <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="px-3 py-1 bg-white dark:bg-[#202020] rounded-full border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 flex items-center gap-1 shadow-sm">
             <Filter size={10} /> Filters
          </div>
          <div className="px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-bold text-white shadow-lg shadow-indigo-500/20">
             Premium (.io)
          </div>
       </div>

       {/* Reshuffling Grid */}
       <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-8">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className={`h-16 rounded-lg border transition-all duration-500 ${[1,3,5].includes(i) ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30 scale-100' : 'bg-slate-100 dark:bg-white/5 border-transparent opacity-30 scale-90'}`}></div>
          ))}
       </div>
       
       <div className="absolute bottom-4 flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10"></div>
       </div>
    </div>
  );
};

// --- HOBBY MATE VISUALS ---

const HobbyOnboardingVisual = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const hobbies = ['Photography', 'Gaming', 'Hiking', 'Cooking', 'Art', 'Music', 'Tech'];

  useEffect(() => {
     let i = 0;
     const interval = setInterval(() => {
        if(i < 3) {
           setSelected(prev => [...prev, hobbies[i]]);
           i++;
        } else {
           setSelected([]);
           i = 0;
        }
     }, 1000);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-rose-50 to-orange-50 dark:from-[#1a0f0f] dark:to-[#1a0a0a] rounded-xl border border-rose-100 dark:border-white/5 p-8 flex flex-col items-center justify-center relative overflow-hidden">
       <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">Select Interests</div>
       <div className="flex flex-wrap justify-center gap-4 max-w-md relative z-10">
          {hobbies.map((hobby) => (
             <div 
               key={hobby} 
               className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                 selected.includes(hobby) 
                  ? 'bg-rose-500 border-rose-600 text-white scale-110 shadow-lg shadow-rose-500/30' 
                  : 'bg-white dark:bg-[#202020] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 scale-100'
               }`}
             >
                {hobby}
             </div>
          ))}
       </div>
       {/* Progress Bar */}
       <div className="absolute top-0 left-0 h-1 bg-rose-500 transition-all duration-300" style={{ width: `${(selected.length / 3) * 100}%` }}></div>
       
       {/* Continue Button */}
       <div className={`mt-8 px-8 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold transition-all duration-500 ${selected.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Continue
       </div>
    </div>
  );
};

const HobbyDiscoveryVisual = () => {
  return (
     <div className="w-full h-full bg-slate-50 dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden relative">
        {/* Map Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Radar Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 shadow-lg border-2 border-white"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full animate-ping opacity-20"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full opacity-50"></div>
        </div>

        {/* Pins */}
        {[
           { top: '30%', left: '40%', delay: '0.2s', label: 'Yoga' },
           { top: '60%', left: '70%', delay: '0.8s', label: 'Jam' },
           { top: '70%', left: '20%', delay: '1.2s', label: 'Hike' },
        ].map((pin, i) => (
           <div key={i} className="absolute flex flex-col items-center animate-bounce-gentle group cursor-pointer" style={{ top: pin.top, left: pin.left, animationDelay: pin.delay }}>
              <div className="px-2 py-1 bg-white dark:bg-[#202020] rounded shadow-md text-[10px] font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{pin.label}</div>
              <MapPin size={24} className="text-rose-500 drop-shadow-md" fill="currentColor" />
           </div>
        ))}
     </div>
  );
};

const HobbyMarketplaceVisual = () => {
  return (
     <div className="w-full h-full bg-slate-50 dark:bg-[#101010] rounded-xl border border-slate-200 dark:border-white/5 p-8 flex flex-col relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
           <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase">Marketplace</h4>
           <div className="relative">
              <ShoppingBag size={20} className="text-slate-600 dark:text-slate-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center animate-bounce">1</div>
           </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
           {[
              { icon: Camera, color: 'bg-blue-100 text-blue-600', name: 'Camera' },
              { icon: Music, color: 'bg-purple-100 text-purple-600', name: 'Guitar' },
              { icon: Gamepad2, color: 'bg-green-100 text-green-600', name: 'Console' },
           ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-[#202020] rounded-xl p-3 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                 <div className={`w-full aspect-square rounded-lg ${item.color} dark:bg-white/5 dark:text-white flex items-center justify-center mb-2`}>
                    <item.icon size={20} />
                 </div>
                 <div className="h-2 w-2/3 bg-slate-200 dark:bg-white/10 rounded mb-1"></div>
                 <div className="flex justify-between items-center">
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-white/10 rounded"></div>
                    <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-colors">
                       <Plus size={12} />
                    </div>
                 </div>
              </div>
           ))}
        </div>
     </div>
  );
};

// --- POWER OF VOLATILITY VISUALS ---

const VolatilityDashboardVisual = () => {
  return (
     <div className="w-full h-full bg-[#0F1210] rounded-xl border border-emerald-500/10 p-4 flex flex-col gap-4 font-mono">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
           <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Zap size={14} /> LIVE TERMINAL
           </div>
           <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Connected
           </div>
        </div>
        
        <div className="flex-1 flex gap-4 overflow-hidden">
           {/* Chart Area */}
           <div className="flex-1 bg-[#1A221E] rounded-lg border border-white/5 p-4 relative overflow-hidden">
               <div className="flex justify-between text-xs text-slate-400 mb-4">
                  <span>BTC/USD</span>
                  <span className="text-white">$42,305.20</span>
               </div>
               
               {/* Candle Animation */}
               <div className="flex items-end justify-between h-40 gap-1">
                  {[...Array(20)].map((_, i) => {
                     const height = Math.random() * 80 + 20;
                     const isGreen = Math.random() > 0.4;
                     return (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end group">
                           <div className={`w-[1px] h-full ${isGreen ? 'bg-emerald-800' : 'bg-rose-800'}`}></div>
                           <div className={`w-full absolute bottom-0 ${isGreen ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ height: `${height}%` }}></div>
                        </div>
                     )
                  })}
               </div>
               
               {/* Live Price Line */}
               <div className="absolute top-1/2 right-0 w-full h-px bg-emerald-500/50 border-t border-dashed border-emerald-500"></div>
           </div>
           
           {/* Order Book */}
           <div className="w-48 bg-[#1A221E] rounded-lg border border-white/5 p-2 hidden md:block">
              <div className="text-[10px] text-slate-500 mb-2 uppercase">Order Book</div>
              <div className="space-y-1">
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex justify-between text-[10px]">
                       <span className="text-rose-400">{(42400 + i*10).toFixed(2)}</span>
                       <span className="text-slate-400">{(Math.random() * 2).toFixed(4)}</span>
                    </div>
                 ))}
                 <div className="h-px bg-white/10 my-2"></div>
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex justify-between text-[10px]">
                       <span className="text-emerald-400">{(42300 - i*10).toFixed(2)}</span>
                       <span className="text-slate-400">{(Math.random() * 2).toFixed(4)}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
     </div>
  );
};

const VolatilityMobileVisual = () => {
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-[#151515] rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-center">
       <div className="w-64 h-[90%] bg-[#0F1210] rounded-[2rem] border-4 border-slate-800 shadow-2xl overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl z-20"></div>
          
          {/* App Header */}
          <div className="pt-8 px-4 pb-4 bg-[#1A221E]">
             <div className="text-xs text-slate-400">Portfolio Value</div>
             <div className="text-2xl font-bold text-white">$12,450.00</div>
             <div className="text-xs text-emerald-400">+12.5% (24h)</div>
          </div>
          
          {/* Crypto List */}
          <div className="p-4 space-y-3">
             {[
                { name: 'Bitcoin', symbol: 'BTC', price: '$42k', change: '+2%' },
                { name: 'Ethereum', symbol: 'ETH', price: '$3.2k', change: '+1.5%' },
                { name: 'Solana', symbol: 'SOL', price: '$98', change: '-0.5%' },
                { name: 'Cardano', symbol: 'ADA', price: '$0.5', change: '+5%' },
             ].map((coin, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] font-bold text-emerald-500">{coin.symbol}</div>
                      <div>
                         <div className="text-sm font-bold text-white">{coin.name}</div>
                         <div className="text-[10px] text-slate-500">{coin.symbol}</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-sm font-bold text-white">{coin.price}</div>
                      <div className={`text-[10px] ${coin.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{coin.change}</div>
                   </div>
                </div>
             ))}
          </div>
          
          {/* Bottom Nav */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-[#1A221E] flex items-center justify-around text-slate-500">
             <div className="text-emerald-500"><Activity size={20} /></div>
             <div><Search size={20} /></div>
             <div><User size={20} /></div>
          </div>
       </div>
    </div>
  );
};

// --- PLAYZONE VISUALS ---

const PlayZoneDiscoveryVisual = () => {
  return (
    <div className="w-full h-full bg-[#0F0F15] rounded-xl border border-purple-500/10 p-6 flex flex-col gap-4 overflow-hidden relative">
       <div className="flex items-center justify-between">
          <h4 className="text-white font-bold flex items-center gap-2"><Gamepad2 className="text-purple-500" /> Live Matches</h4>
          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-[10px] rounded uppercase font-bold animate-pulse">Online</span>
       </div>
       
       <div className="space-y-3 relative z-10">
          {[
             { game: 'Cyber Battle', players: '4/10', prize: '$500', bg: 'from-blue-600 to-cyan-600' },
             { game: 'Neon Racer', players: '8/8', prize: '$1k', bg: 'from-fuchsia-600 to-purple-600' },
             { game: 'Pixel Wars', players: '12/20', prize: '$200', bg: 'from-emerald-600 to-teal-600' },
          ].map((match, i) => (
             <div key={i} className="group relative overflow-hidden bg-[#1A1A25] rounded-xl p-3 border border-white/5 hover:border-purple-500/50 transition-all cursor-pointer">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${match.bg}`}></div>
                <div className="flex justify-between items-center relative z-10">
                   <div>
                      <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{match.game}</div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1"><Users size={10} /> {match.players}</div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs font-bold text-yellow-400 flex items-center gap-1"><Trophy size={10} /> {match.prize}</div>
                      <button className="mt-1 px-3 py-1 bg-white/10 hover:bg-purple-600 text-[10px] text-white rounded transition-colors">Join</button>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

const PlayZoneBracketVisual = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0f] rounded-xl border border-white/5 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,purple,transparent)]"></div>
        <div className="flex items-center gap-8 w-full max-w-lg relative z-10">
            {/* Round 1 */}
            <div className="space-y-8 flex-1">
               <div className="p-2 bg-[#1A1A25] border border-white/10 rounded flex justify-between items-center">
                  <span className="text-xs text-slate-400">Team A</span>
                  <span className="text-xs text-green-400">W</span>
               </div>
               <div className="p-2 bg-[#1A1A25] border border-white/10 rounded flex justify-between items-center opacity-50">
                  <span className="text-xs text-slate-400">Team B</span>
                  <span className="text-xs text-red-400">L</span>
               </div>
            </div>
            
            {/* Connector */}
            <div className="h-24 w-8 border-r-2 border-y-2 border-purple-500/50 rounded-r-xl"></div>
            
            {/* Winner */}
            <div className="flex-1">
               <div className="p-3 bg-gradient-to-r from-purple-900/50 to-transparent border border-purple-500 rounded flex flex-col items-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Crown size={20} className="text-yellow-400 mb-1 animate-bounce" />
                  <span className="text-sm font-bold text-white">Team A</span>
                  <span className="text-[10px] text-purple-300">Champion</span>
               </div>
            </div>
        </div>
    </div>
  );
};

const PlayZoneThemeVisual = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => { const i = setInterval(() => setIsDark(d => !d), 2000); return () => clearInterval(i); }, []);

  return (
     <div className="w-full h-full flex relative overflow-hidden rounded-xl">
        <div className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-[#0F0F15]' : 'bg-slate-100'} flex items-center justify-center`}>
           <div className={`w-64 p-4 rounded-2xl shadow-2xl transition-all duration-1000 ${isDark ? 'bg-[#1A1A25] border border-white/10' : 'bg-white border border-slate-200'}`}>
               <div className="flex justify-between items-center mb-6">
                  <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Settings</div>
                  <div className={`p-2 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'}`}>
                     {isDark ? <Moon size={16} /> : <Sun size={16} />}
                  </div>
               </div>
               <div className="space-y-3">
                  {[1,2,3].map(i => (
                     <div key={i} className={`h-10 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}></div>
                  ))}
               </div>
           </div>
           
           {/* Scan Line */}
           <div className="absolute inset-y-0 w-1 bg-purple-500 shadow-[0_0_20px_purple] animate-[shine_4s_infinite]"></div>
        </div>
     </div>
  );
};

// --- TECH CARD COMPONENT (Refined UI) ---
const TechCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-[240px] bg-white dark:bg-[#121212] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
    >
      {/* Visual Container */}
      <div className="absolute inset-0 bottom-[84px] overflow-hidden">
         <div className={`absolute inset-0 opacity-[0.08] bg-gradient-to-br ${project.gradient} transition-opacity duration-500 group-hover:opacity-15`}></div>
         <div className="w-full h-full">
            {project.id === 'domain-markt' && <DomainMarktVisual />}
            {project.id === 'hobbymate' && <HobbyMateVisual />}
            {project.id === 'power-volatility' && <PowerVolatilityVisual />}
            {project.id === 'playzone' && <PlayZoneVisual />}
            {!['domain-markt', 'hobbymate', 'power-volatility', 'playzone'].includes(project.id) && (
               <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-[#0F0F0F]"><Layers className="text-slate-300 dark:text-white/10" size={48} /></div>
            )}
         </div>
         <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg scale-0 group-hover:scale-100">
            <ArrowUpRight size={18} className="text-slate-900 dark:text-white" />
         </div>
      </div>

      {/* Info Bar (Glassmorphic) */}
      <div className="absolute bottom-0 inset-x-0 h-[84px] bg-white dark:bg-[#121212] border-t border-slate-100 dark:border-white/5 flex flex-col justify-center px-6 z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
         <div className="flex justify-between items-center mb-2">
             <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-none tracking-tight">{project.title}</h3>
             <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{project.category}</span>
         </div>
         <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0,3).map(tag => (
              <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 whitespace-nowrap group-hover:border-indigo-500/20 transition-colors">{tag}</span>
            ))}
         </div>
      </div>
    </div>
  );
};

// --- CASE STUDY MODAL ---
const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl transition-opacity duration-300" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#0F0F0F] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10 animate-fade-in-up">
        
        {/* Modal Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-50 pointer-events-none">
           <div className="pointer-events-auto"></div>
           <button onClick={onClose} className="pointer-events-auto group p-2.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 text-slate-900 dark:text-white hover:bg-white/40 transition-all shadow-lg hover:rotate-90 duration-300"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-[#0F0F0F] relative">
             {/* Content Noise Texture */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] fixed"></div>

             {/* Hero Visual */}
             <div className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <ModalHeroAnimation project={project} />
                
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 drop-shadow-2xl tracking-tight leading-none scale-95 animate-[fadeInUp_0.8s_ease-out_forwards]">{project.title}</h2>
                    <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">{project.summary}</p>
                    
                    {/* Live Link Button */}
                    <div className="animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-bold hover:bg-white hover:text-slate-900 hover:scale-105 transition-all flex items-center gap-2 shadow-xl border border-white/20">
                          Visit Live Site <ExternalLink size={18} />
                        </a>
                      ) : (
                        <button disabled className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white/50 font-bold cursor-not-allowed border border-white/10 flex items-center gap-2">
                          Coming Soon <Timer size={18} />
                        </button>
                      )}
                    </div>
                </div>
             </div>

             {/* Content Container */}
             <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                 
                 {/* Meta Grid */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-slate-200 dark:border-white/5">
                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Role</div><div className="font-semibold text-slate-900 dark:text-white">{project.role}</div></div>
                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Timeline</div><div className="font-semibold text-slate-900 dark:text-white">{project.date}</div></div>
                    <div className="col-span-2"><div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service</div><div className="font-semibold text-slate-900 dark:text-white">{project.service}</div></div>
                 </div>

                 {/* Case Study Loop */}
                 <div className="space-y-20">
                    {project.caseStudy?.map((section, index) => (
                      <div key={index}>
                         
                         {/* Text Section */}
                         {section.type === 'text' && (
                           <div className="max-w-2xl mx-auto">
                              {section.title && <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h3>}
                              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{section.content}</p>
                           </div>
                         )}
                         
                         {/* Heading Section */}
                         {section.type === 'heading' && (
                            <div className="max-w-2xl mx-auto text-center py-8">
                               <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{section.title}</h3>
                               <p className="text-slate-500">{section.content}</p>
                            </div>
                         )}

                         {/* List Section */}
                         {section.type === 'list' && (
                           <div className="max-w-2xl mx-auto">
                              {section.title && <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{section.title}</h3>}
                              {section.content && <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{section.content}</p>}
                              <ul className="space-y-6">
                                {section.items?.map((item, i) => (
                                  <li key={i} className="flex gap-4">
                                     <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1"><Check size={14} className="text-indigo-600 dark:text-indigo-400" /></div>
                                     <div>
                                        <div className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</div>
                                        <div className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</div>
                                     </div>
                                  </li>
                                ))}
                              </ul>
                           </div>
                         )}

                         {/* Visual Section */}
                         {section.type === 'image' && (
                            <div className="my-12">
                               {section.title && <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-6">{section.title}</h4>}
                               <div className="w-full aspect-video bg-slate-50 dark:bg-[#151515] rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-2xl">
                                  {/* Map Visual Components */}
                                  {section.title === 'Gallery View' && <GalleryVisual />}
                                  {section.title === 'Listed Domains' && <ListedDomainsVisual />}
                                  {section.title === 'Domain Overview' && <DashboardVisual />}
                                  {section.title === 'Feature Highlight' && <FeatureHighlightVisual />}
                                  
                                  {/* HobbyMate Visuals */}
                                  {section.title === 'Onboarding Experience' && <HobbyOnboardingVisual />}
                                  {section.title === 'Location-Based Discovery' && <HobbyDiscoveryVisual />}
                                  {section.title === 'Marketplace Ecosystem' && <HobbyMarketplaceVisual />}

                                  {/* PowerVolatility Visuals */}
                                  {section.title === 'Live Trading Dashboard' && <VolatilityDashboardVisual />}
                                  {section.title === 'Mobile Trading Experience' && <VolatilityMobileVisual />}

                                  {/* PlayZone Visuals */}
                                  {section.title === 'Match Discovery' && <PlayZoneDiscoveryVisual />}
                                  {section.title === 'Tournament Bracket' && <PlayZoneBracketVisual />}
                                  {section.title === 'Light & Dark Mode' && <PlayZoneThemeVisual />}
                                  
                                  {/* Fallback */}
                                  {!['Gallery View', 'Listed Domains', 'Domain Overview', 'Live Trading Dashboard', 'Onboarding Experience', 'Mobile Trading Experience', 'Location-Based Discovery', 'Marketplace Ecosystem', 'Match Discovery', 'Tournament Bracket', 'Light & Dark Mode', 'Feature Highlight'].includes(section.title || '') && (
                                     <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-white/10">
                                        <Layers size={64} />
                                     </div>
                                  )}
                               </div>
                               {section.content && <p className="text-center text-sm text-slate-500 mt-4 max-w-xl mx-auto">{section.content}</p>}
                            </div>
                         )}
                      </div>
                    ))}
                 </div>

             </div>
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => { if (selectedProject) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'unset'; } return () => { document.body.style.overflow = 'unset'; } }, [selectedProject]);
  return (
    <section id="work" className="relative py-20 bg-slate-50 dark:bg-[#050505] transition-colors overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"><div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]"></div></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-4"><Sparkles className="text-indigo-600 dark:text-indigo-400" size={16} /><span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs">Selected Case Studies</span></div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">Crafting intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">digital interfaces.</span></h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed w-full">A selection of strategic projects across FinTech, Social Discovery, and Gaming—focused on scalability, interaction, and business impact.</p>
            </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
             <Reveal key={project.id} delay={index * 150} className="w-full">
                <TechCard project={project} onClick={() => setSelectedProject(project)} />
             </Reveal>
          ))}
        </div>
      </div>
      {selectedProject && (<CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />)}
    </section>
  );
};
