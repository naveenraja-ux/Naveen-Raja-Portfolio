
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-[#050505] transition-colors duration-500 overflow-x-hidden">
      
      {/* --- GLOBAL CONTINUOUS BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Noise Texture - Subtle & Blended */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* Flowing Mesh Gradients - Adapted for Light/Dark */}
        {/* Light Mode: Softer, pastel tones to avoid muddy look */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-[100px] md:blur-[140px] animate-mesh"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-300/20 dark:bg-fuchsia-600/10 rounded-full blur-[100px] md:blur-[140px] animate-mesh animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-[100px] md:blur-[140px] animate-mesh animation-delay-4000"></div>

        {/* Global Grid Overlay - Clean Graph Paper vs Cyber Grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               color: 'var(--grid-color)', // Handled by CSS variable or text color inheritance if needed, but here inline:
             }}>
             {/* Using classes to switch grid color */}
             <div className="absolute inset-0 text-indigo-500 dark:text-indigo-400" 
                  style={{ 
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
                    backgroundSize: '50px 50px',
                    maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
                  }}></div>
        </div>
      </div>

      {/* Main Content Wrapper - Relative to sit above fixed background */}
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Global Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg text-indigo-600 dark:text-indigo-400 transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="relative z-10">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
