
import React from 'react';
import { Code2, Palette, Users, GraduationCap, MapPin, CheckCircle2, FileCode2, Binary, Cpu, Network, Database, BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#0B0B0B] overflow-hidden transition-colors">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Subtle Grid */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
              style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
         </div>
         
         {/* Animated Ambient Glows */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

         {/* Floating Abstract Symbols (Logic Theme) */}
         <div className="absolute top-20 right-[5%] font-mono text-8xl text-slate-200 dark:text-white/[0.02] font-bold rotate-12 animate-float" style={{ animationDuration: '8s' }}>
            {`{ }`}
         </div>
         <div className="absolute bottom-20 left-[2%] font-mono text-9xl text-slate-200 dark:text-white/[0.02] font-bold -rotate-6 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
            {`</>`}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- MAIN GRID LAYOUT (3:2 Ratio) --- */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
           
           {/* LEFT SIDE: Narrative & Identity (Span 3) */}
           <div className="lg:col-span-3 relative">
              <Reveal>
                {/* Decoration Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full mb-8"></div>

                {/* Animated Header */}
                <div className="mb-8 relative">
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                      The logic of an <span className="text-indigo-600 dark:text-indigo-400">engineer</span>. <br />
                      The eye of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-500 animate-gradient-x">designer</span>.
                   </h2>
                </div>
              </Reveal>

              <Reveal delay={200}>
                {/* Bio Text */}
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                   <p className="text-lg md:text-xl">
                      I sit at the rare intersection of <strong className="font-semibold text-slate-900 dark:text-white">Computer Science</strong> and <strong className="font-semibold text-slate-900 dark:text-white">Creative Design</strong>.
                   </p>
                   <p>
                      While most designers stop at "how it looks," I dig deeper into "how it works." My technical background allows me to build scalable design systems and feasible user flows that bridge the gap between imagination and execution. My mission is to remove friction and make complex digital products feel <em className="text-indigo-600 dark:text-indigo-400 not-italic font-medium">effortless</em>.
                   </p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                {/* Identity Capsule */}
                <div className="flex flex-wrap items-center gap-6">
                   
                   {/* Discipline Stack */}
                   <div className="relative group inline-block">
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                       <div className="relative px-6 py-4 bg-white dark:bg-[#151515] rounded-xl flex items-center gap-4 border border-slate-100 dark:border-white/5 shadow-sm">
                          
                          <div className="flex -space-x-3">
                             <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center border-2 border-white dark:border-[#151515] shadow-sm z-30 transition-transform group-hover:-translate-x-1">
                                <Code2 size={18} className="text-blue-500" />
                             </div>
                             <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center border-2 border-white dark:border-[#151515] shadow-sm z-20 transition-transform group-hover:-translate-y-1">
                                <Palette size={18} className="text-fuchsia-500" />
                             </div>
                             <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center border-2 border-white dark:border-[#151515] shadow-sm z-10 transition-transform group-hover:translate-x-1">
                                <Users size={18} className="text-emerald-500" />
                             </div>
                          </div>
                          
                          <div className="h-8 w-px bg-slate-200 dark:bg-white/10"></div>
                          
                          <div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Core Focus</div>
                             <div className="text-sm font-bold text-slate-900 dark:text-white">Product & Systems</div>
                          </div>

                       </div>
                   </div>

                </div>
              </Reveal>
           </div>

           {/* RIGHT SIDE: Education Block (Span 2) */}
           <div className="lg:col-span-2 h-full flex items-center">
              <Reveal delay={300} className="w-full">
                <div className="relative w-full group">
                   {/* Glow Effect */}
                   <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                   
                   <div className="relative bg-white dark:bg-[#151515] ring-1 ring-slate-900/5 dark:ring-white/10 rounded-2xl overflow-hidden shadow-2xl">
                      
                      {/* Top Accent */}
                      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500"></div>

                      <div className="p-8">
                         
                         {/* --- HOLOGRAPHIC ACADEMIC SYSTEM VISUAL --- */}
                         <div className="relative h-56 bg-slate-50 dark:bg-[#0A0A0A] rounded-xl mb-8 overflow-hidden border border-slate-100 dark:border-white/5 flex items-center justify-center group-hover:border-indigo-500/20 transition-colors">
                            
                            {/* Animated Grid Floor */}
                            <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.2]" 
                                 style={{ 
                                   backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
                                   backgroundSize: '24px 24px',
                                   transform: 'perspective(300px) rotateX(60deg) translateY(100px) scale(2)'
                                 }}>
                            </div>

                            {/* Center Hologram Core */}
                            <div className="relative z-10 w-20 h-20 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/40 dark:border-white/10 flex items-center justify-center shadow-lg animate-float">
                                <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl animate-pulse"></div>
                                <GraduationCap size={32} className="text-indigo-600 dark:text-indigo-400 drop-shadow-md relative z-10" />
                            </div>

                            {/* Orbiting Tech Nodes */}
                            <div className="absolute inset-0 pointer-events-none">
                               {/* Ring 1 */}
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-slate-300 dark:border-white/10 opacity-60 animate-[spin_10s_linear_infinite]">
                                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
                                     <Cpu size={12} className="text-fuchsia-500" />
                                  </div>
                               </div>
                               {/* Ring 2 */}
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-slate-300 dark:border-white/10 opacity-40 animate-[spin_15s_linear_infinite_reverse]">
                                   <div className="absolute top-1/2 -left-3 -translate-y-1/2 p-1.5 bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
                                     <Network size={12} className="text-emerald-500" />
                                  </div>
                                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 p-1.5 bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
                                     <Database size={12} className="text-amber-500" />
                                  </div>
                               </div>
                            </div>
                            
                            {/* Floating Snippets */}
                            <div className="absolute top-4 right-4 bg-white dark:bg-[#151515] px-2 py-1 rounded border border-slate-100 dark:border-white/10 shadow-sm text-[10px] font-mono text-slate-500 animate-float" style={{ animationDelay: '2s' }}>
                               DSA.js
                            </div>
                             <div className="absolute bottom-4 left-4 bg-white dark:bg-[#151515] px-2 py-1 rounded border border-slate-100 dark:border-white/10 shadow-sm text-[10px] font-mono text-slate-500 animate-float" style={{ animationDelay: '1.5s' }}>
                               System_Design
                            </div>
                         </div>

                         {/* Degree Info */}
                         <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">B.E. Computer Science Engineering</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                               <div className="flex items-center gap-1.5">
                                  <Building2Icon size={14} />
                                  <span>Sri Eshwar College</span>
                               </div>
                               <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></span>
                               <div className="flex items-center gap-1.5">
                                  <MapPin size={14} />
                                  <span>Coimbatore</span>
                               </div>
                               <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20"></span>
                               <div className="flex items-center gap-1.5">
                                  <BookOpen size={14} />
                                  <span>2020 - 2024</span>
                               </div>
                            </div>

                            {/* Performance Block (CGPA) */}
                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#0A0A0A] border border-slate-100 dark:border-white/5 rounded-xl">
                               <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                     <CheckCircle2 size={20} className="text-emerald-500" />
                                  </div>
                                  <div>
                                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall CGPA</div>
                                     <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Class with Distinction</div>
                                  </div>
                               </div>
                               <div className="text-3xl font-display font-bold text-slate-900 dark:text-white">8.69</div>
                            </div>
                         </div>

                      </div>
                   </div>
                </div>
              </Reveal>
           </div>
        </div>
      </div>
    </section>
  );
};

const Building2Icon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
);
