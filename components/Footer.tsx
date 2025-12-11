import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          © 2026 Naveen Raja S. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
           <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};