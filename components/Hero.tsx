
import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Mail, Moon, Sun, ChevronDown } from 'lucide-react';

// Simple Typewriter Component
const Typewriter = ({ text, delay = 100 }: { text: string, delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="animate-blink-caret border-r-4 border-indigo-500 ml-1"></span>
    </span>
  );
};

export const Hero = () => {
  const [isDark, setIsDark] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Theme initialization
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const animationInterval = setInterval(() => {
      setShowWave(prev => !prev);
    }, 3000);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const gradientTextClass = isDark 
    ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x"
    : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x";

  const BehanceIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
        <path d="M3 12l4.5 0" />
        <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
        <path d="M16 6l3 0" />
    </svg>
  );

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans py-20"
    >
      
      {/* --- BACKGROUND INTERACTIVE LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Mouse Spotlight Effect */}
         <div 
            className="absolute inset-0 transition-opacity duration-300 opacity-0 md:opacity-100"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x * 50 + 50}% ${mousePos.y * 50 + 50}%, ${isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.08)'}, transparent 40%)`
            }}
         ></div>

         {/* 3D Perspective Grid */}
         <div 
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
            style={{
               backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
               transformOrigin: 'center top',
               maskImage: 'linear-gradient(to bottom, transparent, black 40%, transparent)'
            }}
         ></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-4 md:mx-auto animate-fade-in-up flex flex-col items-center gap-6">
        
        {/* Theme Toggle Centered */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg text-slate-500 hover:text-yellow-500 dark:text-slate-300 dark:hover:text-yellow-300 transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Animated Gradient Border Wrapper */}
        <div className="relative group p-[2px] rounded-[2.2rem] overflow-hidden w-full max-w-5xl">
            
            {/* Moving Gradient Border */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#5046E6_50%,#E2E8F0_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#0F172A_0%,#6366f1_50%,#0F172A_100%)] animate-spin-slow opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            {/* Main Card Content */}
            <div className="relative w-full bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-2xl rounded-[2rem] p-8 flex flex-col items-center text-center overflow-hidden">
                
                {/* Inner Top Glow Accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>
                
                {/* Available Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-6 animate-fade-in-up hover:bg-emerald-500/20 transition-colors cursor-default">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                   UI/UX Designer
                </div>

                {/* Typography */}
                <h1 className="relative font-display font-medium text-4xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white mb-6 leading-tight max-w-5xl flex flex-wrap justify-center items-center gap-x-4 tracking-tight">
                  <span className="relative inline-flex justify-center items-center cursor-default min-w-[2ch] h-[1.2em]">
                      {/* Waving Hand */}
                      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${showWave ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <span className="animate-wave-smooth text-4xl md:text-6xl origin-[70%_70%] drop-shadow-md">👋</span>
                      </span>
                      {/* Text */}
                      <span className={`transition-all duration-700 ease-in-out ${showWave ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                        Hey
                      </span>
                  </span>
                  <span className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    , I’m <span className={gradientTextClass}>
                      <Typewriter text="Naveen Raja" delay={150} />
                    </span>
                  </span>
                </h1>

                <div className="flex flex-col items-center gap-4 mb-8 max-w-4xl mx-auto">
                    <p className="font-display font-semibold text-xl md:text-3xl text-slate-800 dark:text-slate-100 leading-snug animate-fade-in-up text-center tracking-tight" style={{ animationDelay: '0.2s' }}>
                       I design clean, intuitive digital experiences that <span className="text-indigo-600 dark:text-indigo-400 relative inline-block whitespace-nowrap">
                         feel effortless
                         <svg className="absolute -bottom-1 left-0 w-full h-2 text-indigo-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                         </svg>
                       </span>.
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl animate-fade-in-up leading-relaxed text-center max-w-3xl font-light" style={{ animationDelay: '0.3s' }}>
                       Bridging the gap between <span className="font-medium text-slate-900 dark:text-white">complex engineering</span> and <span className="font-medium text-slate-900 dark:text-white">elegant design</span>.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center animate-fade-in-up gap-4" style={{ animationDelay: '0.4s' }}>
                  <a 
                    href="https://drive.google.com/file/d/1msZnVJHD9dI5A9GiPPV-Orwg1O89IbXw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] overflow-hidden text-base"
                  >
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine" />
                    <span className="relative z-10">Resume</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Social Profile Icons */}
                <div className="mt-8 flex items-center justify-center gap-8 animate-fade-in-up border-t border-slate-200 dark:border-white/10 pt-6 w-full max-w-xs" style={{ animationDelay: '0.5s' }}>
                  <a 
                    href="https://www.linkedin.com/in/naveen-raja-s-80282023a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#0077B5] transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://www.behance.net/naveenraja12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#1769FF] transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
                    aria-label="Behance"
                  >
                    <BehanceIcon size={24} />
                  </a>
                  <a 
                    href="mailto:naveenraja1297@gmail.com" 
                    className="text-slate-400 hover:text-rose-500 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>

            </div>
        </div>

      </div>
      
      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce cursor-pointer z-20 p-2"
        aria-label="Scroll Down"
      >
        <ChevronDown size={24} />
      </a>
      
    </section>
  );
};
