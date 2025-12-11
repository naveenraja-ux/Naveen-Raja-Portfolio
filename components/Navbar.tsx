
import React, { useState, useEffect } from 'react';
import { Home, Grid, User, Sparkles, Mail, Moon, Sun, FileText, ArrowUp } from 'lucide-react';

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check system preference
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Scroll spy for active section
    const handleScroll = () => {
      // Updated order to match App.tsx layout
      const sections = ['home', 'about', 'work', 'ai-lab', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'root' : section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'work', icon: Grid, label: 'Work', href: '#work' },
    { id: 'ai-lab', icon: Sparkles, label: 'AI Lab', href: '#ai-lab' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-indigo-500/10 ring-1 ring-slate-900/5 transition-all duration-300 hover:scale-105">
        
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              activeSection === item.id 
                ? 'bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400' 
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            aria-label={item.label}
          >
            <item.icon size={20} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5" />
            
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl whitespace-nowrap pointer-events-none">
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white"></span>
            </span>
          </a>
        ))}

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-slate-500 hover:text-yellow-500 dark:text-slate-400 dark:hover:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all relative group"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl whitespace-nowrap pointer-events-none">
            {isDark ? 'Light Mode' : 'Dark Mode'}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white"></span>
          </span>
        </button>

        <a
          href="/resume.pdf"
          className="ml-1 pl-3 pr-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
        >
          <FileText size={18} />
          <span className="hidden sm:inline">Resume</span>
          
          {/* Mobile Tooltip for Resume */}
          <span className="sm:hidden absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl whitespace-nowrap pointer-events-none">
            Resume
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white"></span>
          </span>
        </a>
      </div>
    </nav>
  );
};