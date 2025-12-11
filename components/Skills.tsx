
import React, { useRef, useState } from 'react';
import { 
  Layout, 
  PenTool, 
  MousePointer2, 
  Smartphone, 
  Grid, 
  GitMerge,
  Palette,
  Search,
  Zap
} from 'lucide-react';
import { Reveal } from './Reveal';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

const SpotlightCard = ({ title, description, icon: Icon, className = "", children }: SkillCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.08), transparent 40%)`,
        }}
      />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {children}
      </div>

      {/* Content Container */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-20 pointer-events-none">
        <div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-indigo-100 dark:border-white/10 shadow-sm">
            <Icon className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" size={20} />
          </div>
          
          <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-slate-50 mb-2 md:mb-3 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Brand Icons Components for Tools Section
const FigmaLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 38 57" fill="none" className={className}>
    <path d="M19 28.5C19 28.5 19 38 19 38C19 43.2467 14.7467 47.5 9.5 47.5C4.25329 47.5 0 43.2467 0 38C0 32.7533 4.25329 28.5 9.5 28.5H19Z" fill="#0ACF83"/>
    <path d="M0 19C0 13.7533 4.25329 9.5 9.5 9.5H19V28.5H9.5C4.25329 28.5 0 24.2467 0 19Z" fill="#A259FF"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#F24E1E"/>
    <path d="M19 19H28.5C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V19Z" fill="#FF7262"/>
    <path d="M19 38C19 38 19 47.5 19 47.5C19 52.7467 23.2533 57 28.5 57C33.7467 57 38 52.7467 38 47.5C38 42.2533 33.7467 38 28.5 38H19Z" fill="#1ABCFE"/>
  </svg>
);

const FramerLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 0h16v8h-8zM4 8h8l-8 8zM4 16h8v8z"/>
  </svg>
);

const MiroLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18.67 16.96V5.13L16.26 6.34V15.71L18.67 16.96ZM5.33 16.96V5.13L2.92 6.34V15.71L5.33 16.96ZM12 16.96V5.13L9.59 6.34V15.71L12 16.96ZM22.5 4.5L20.09 3.29V16.63L22.5 17.88V4.5Z" fill="currentColor"/>
  </svg>
);

const BalsamiqLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M7 9h2v2H7zm8 0h2v2h-2zm-8 6h10v2H7z"/>
  </svg>
);

const WixLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.86 6.84h-1.89l-1.46 8.52-3.05-8.52h-2.15l-3.04 8.56-1.53-8.56H7.83l2.25 10.33h2.36l2.94-8.08 2.87 8.08h2.36l2.25-10.33zM1.14 6.84H3.4l1.37 5.95 1.1-5.95h1.9l-1.92 7.74-1.28-4.99-1.29 4.99L1.14 6.84z"/>
  </svg>
);

const NotionLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.222 4.222v15.556h15.556V4.222H4.222zM16.5 16.333h-1.667L10.667 9.5v6.833H9V7.667h1.667l4.166 6.833V7.667h1.667v8.666z"/>
  </svg>
);

const CanvaLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 21.818c-5.424 0-9.818-4.394-9.818-9.818S6.576 2.182 12 2.182 21.818 6.576 21.818 12 17.424 21.818 12 21.818z" opacity="0.2"/>
     <path d="M16.5 10.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM7.5 10.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/>
  </svg>
);

const LightroomLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#31A8FF"/>
    <text x="12" y="15" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10" fontFamily="sans-serif">Lr</text>
  </svg>
);


export const Skills = () => {
  const tools = [
    { 
      name: 'Figma', 
      icon: FigmaLogo, 
      className: '', 
      color: 'text-[#0ACF83]', 
      glow: 'shadow-[#0ACF83]/20 border-[#0ACF83]/20'
    }, 
    { 
      name: 'Framer', 
      icon: FramerLogo, 
      className: 'text-black dark:text-white', 
      color: 'text-black dark:text-white',
      glow: 'shadow-black/20 dark:shadow-white/20 border-black/10 dark:border-white/10'
    },
    { 
      name: 'Miro', 
      icon: MiroLogo, 
      className: 'text-[#050038] dark:text-[#FFD02F]', 
      color: 'text-[#050038] dark:text-[#FFD02F]',
      glow: 'shadow-[#FFD02F]/30 border-[#FFD02F]/20'
    },
    { 
      name: 'Balsamiq', 
      icon: BalsamiqLogo, 
      className: 'text-[#CE3636]', 
      color: 'text-[#CE3636]',
      glow: 'shadow-[#CE3636]/20 border-[#CE3636]/20'
    },
    { 
      name: 'Wix Studio', 
      icon: WixLogo, 
      className: 'text-black dark:text-white', 
      color: 'text-black dark:text-white',
      glow: 'shadow-black/20 dark:shadow-white/20 border-black/10 dark:border-white/10'
    },
    { 
      name: 'Lightroom', 
      icon: LightroomLogo, 
      className: '', 
      color: 'text-[#31A8FF]',
      glow: 'shadow-[#31A8FF]/20 border-[#31A8FF]/20'
    },
    { 
      name: 'Canva', 
      icon: CanvaLogo, 
      className: 'text-[#00C4CC]', 
      color: 'text-[#00C4CC]',
      glow: 'shadow-[#00C4CC]/20 border-[#00C4CC]/20'
    },
    { 
      name: 'Notion', 
      icon: NotionLogo, 
      className: 'text-black dark:text-white', 
      color: 'text-black dark:text-white',
      glow: 'shadow-black/20 dark:shadow-white/20 border-black/10 dark:border-white/10'
    },
  ];

  // Duplicate for seamless loop
  const marqueeTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section id="skills" className="relative py-20 md:py-24 bg-slate-50 dark:bg-[#0B0B0B] transition-colors overflow-hidden">
      
      {/* Clean Background */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <Reveal>
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent"></span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm">
                    My Expertise
                </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                Design capabilities <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">at a glance.</span>
                </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-md text-sm md:text-base leading-relaxed">
                I specialize in the end-to-end design process, transforming complex requirements into polished, user-centered interfaces.
            </p>
            </div>
        </Reveal>

        {/* Compact Grid Layout - 3 Rows Max */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Row 1: UI/UX (Wide) + Visual (Standard) */}
          <Reveal delay={100} className="md:col-span-2">
            <SpotlightCard 
                title="UI/UX Design"
                description="Designing intuitive, user-friendly interfaces. I focus on clarity and functionality to help users achieve goals effortlessly."
                icon={Layout}
                className="w-full h-full min-h-[240px]"
            >
                {/* Visual: User Flow Abstract */}
                <div className="absolute top-0 right-0 h-full w-3/4 overflow-hidden pointer-events-none">
                    
                    {/* Back Card - Wireframe List */}
                    <div className="absolute top-6 right-8 w-48 h-32 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl transform -rotate-12 translate-x-8 opacity-40 group-hover:rotate-[-6deg] group-hover:translate-x-4 transition-all duration-700 ease-out origin-bottom-left">
                    <div className="p-3 space-y-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 mb-2"></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded"></div>
                        <div className="w-2/3 h-2 bg-slate-200 dark:bg-white/10 rounded"></div>
                    </div>
                    </div>

                    {/* Connector Line */}
                    <svg className="absolute top-1/2 right-1/4 w-32 h-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                    <path d="M100,10 C60,10 40,80 0,80" fill="none" stroke="currentColor" className="text-indigo-400/50 dashed" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>

                    {/* Front Card - Main Interface */}
                    <div className="absolute top-16 right-6 w-56 h-40 bg-white dark:bg-[#202020] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl transform -rotate-6 translate-y-4 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] p-4 z-20">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        </div>
                        <div className="w-12 h-1.5 bg-slate-100 dark:bg-white/10 rounded-full"></div>
                    </div>
                    {/* Body Content */}
                    <div className="flex gap-3">
                        {/* Sidebar */}
                        <div className="w-8 h-20 bg-slate-50 dark:bg-white/5 rounded-lg flex flex-col gap-1 p-1">
                            <div className="w-full h-1 bg-indigo-500/20 rounded"></div>
                            <div className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded"></div>
                            <div className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded"></div>
                        </div>
                        {/* Main Area */}
                        <div className="flex-1 space-y-2">
                            <div className="w-full h-12 bg-slate-50 dark:bg-white/5 rounded-lg border border-dashed border-slate-200 dark:border-white/10 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin-slow"></div>
                            </div>
                            <div className="flex gap-2">
                            <div className="w-1/2 h-6 bg-indigo-500/10 rounded-md animate-pulse"></div>
                            <div className="w-1/2 h-6 bg-slate-50 dark:bg-white/5 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    {/* Floating Cursor */}
                    <div className="absolute bottom-10 right-1/2 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-12 transition-all duration-700 ease-out delay-150">
                    <div className="relative">
                        <MousePointer2 size={24} className="text-indigo-600 dark:text-indigo-400 fill-indigo-100 dark:fill-indigo-900/30 drop-shadow-lg" />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity delay-300 shadow-sm">
                        User Flow
                        </div>
                    </div>
                    </div>

                </div>
                {/* Soft Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200} className="md:col-span-1">
            <SpotlightCard 
                title="Visual Design"
                description="Crafting clean, modern visuals using typography and hierarchy to tell a compelling story."
                icon={Palette}
                className="w-full h-full min-h-[240px]"
            >
                {/* Decor: Color Orbs */}
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 mix-blend-multiply dark:mix-blend-screen"></div>
                    <div className="w-8 h-8 rounded-full bg-fuchsia-500 mix-blend-multiply dark:mix-blend-screen"></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </SpotlightCard>
          </Reveal>

          {/* Row 2: Wireframe, Interaction, Systems */}
          <Reveal delay={300}>
            <SpotlightCard 
                title="Wireframing"
                description="Building structure and flow through interactive mockups."
                icon={PenTool}
                className="md:col-span-1 h-full"
            >
                <div className="absolute right-4 bottom-4 w-16 h-16 border-2 border-slate-100 dark:border-white/5 rounded opacity-20 group-hover:scale-110 transition-transform">
                <div className="w-full h-full grid grid-cols-2 gap-1 p-1">
                    <div className="bg-slate-200 dark:bg-white/10 rounded-sm col-span-2 h-4"></div>
                    <div className="bg-slate-200 dark:bg-white/10 rounded-sm col-span-1 h-8"></div>
                    <div className="bg-slate-200 dark:bg-white/10 rounded-sm col-span-1 h-8"></div>
                </div>
                </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={400}>
            <SpotlightCard 
                title="Interaction Design"
                description="Creating smooth, engaging user interactions."
                icon={MousePointer2}
                className="md:col-span-1 h-full"
            >
                <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-indigo-500 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-indigo-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                    </div>
                </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={500}>
            <SpotlightCard 
                title="Design Systems"
                description="Building consistent, scalable components and patterns."
                icon={Grid}
                className="md:col-span-1 h-full"
            >
                <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-10 group-hover:opacity-30 transition-opacity">
                    {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    ))}
                </div>
            </SpotlightCard>
          </Reveal>

          {/* Row 3: Responsive, IA, Usability */}
          <Reveal delay={600}>
            <SpotlightCard 
                title="Responsive Design"
                description="Designing layouts that work seamlessly across devices."
                icon={Smartphone}
                className="md:col-span-1 h-full"
            >
                <div className="absolute bottom-4 right-4 flex items-end gap-1 opacity-10 group-hover:opacity-30 transition-opacity">
                <div className="w-3 h-4 bg-indigo-500 rounded-sm"></div>
                <div className="w-4 h-6 bg-indigo-500 rounded-sm"></div>
                <div className="w-6 h-8 bg-indigo-500 rounded-sm"></div>
                </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={700}>
            <SpotlightCard 
                title="Information Arch"
                description="Organizing content to support usability and navigation."
                icon={GitMerge}
                className="md:col-span-1 h-full"
            >
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500">
                    <path d="M6 3v12" />
                    <circle cx="6" cy="3" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
                </div>
            </SpotlightCard>
          </Reveal>

           <Reveal delay={800}>
            <SpotlightCard 
                title="Usability Testing"
                description="Gathering feedback to refine user experience."
                icon={Search}
                className="md:col-span-1 h-full"
            >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-[6px] border-fuchsia-500/10 rounded-full group-hover:scale-110 transition-transform"></div>
            </SpotlightCard>
           </Reveal>

        </div>

        {/* --- REFINED TOOLS SECTION --- */}
        <Reveal delay={900}>
            <div className="mt-24 pt-10 border-t border-slate-200 dark:border-white/5 relative">
                
                {/* Title */}
                <div className="flex items-center gap-3 mb-8">
                <Zap className="text-amber-500 fill-amber-500" size={20} />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
                    My Design Arsenal
                </h3>
                </div>

                {/* Interactive Infinite Marquee */}
                <div className="relative w-full overflow-hidden z-10 group py-6">
                    
                    {/* Scroll Wrapper */}
                    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] ease-linear">
                        {marqueeTools.map((tool, index) => (
                            <div 
                            key={`${tool.name}-${index}`} 
                            className={`
                                relative mx-6 px-8 py-4 rounded-full 
                                border border-slate-200 dark:border-white/5 
                                bg-white/50 dark:bg-[#1A1A1A]/50 backdrop-blur-sm
                                flex items-center gap-4 transition-all duration-300 
                                opacity-100 hover:scale-110 hover:-translate-y-1 cursor-default
                                overflow-hidden group/card shadow-sm hover:shadow-lg
                                ${tool.glow}
                            `}
                            >
                                {/* Glow Bloom Effect on Hover */}
                                <div className="absolute inset-0 bg-white/20 dark:bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                
                                <div className="w-8 h-8 relative flex items-center justify-center z-20 group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform">
                                    <tool.icon className={`w-full h-full drop-shadow-sm transition-colors duration-300 ${tool.color}`} />
                                </div>
                                <span className="text-base font-bold text-slate-700 dark:text-slate-200 z-20 tracking-tight">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Left/Right Focus Masks (Grayscale Vignette) */}
                    <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-[#0B0B0B] dark:via-[#0B0B0B]/90 z-30 pointer-events-none backdrop-grayscale"></div>
                    <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-[#0B0B0B] dark:via-[#0B0B0B]/90 z-30 pointer-events-none backdrop-grayscale"></div>

                </div>
            </div>
        </Reveal>
        {/* --- END TOOLS SECTION --- */}

      </div>
    </section>
  );
};
