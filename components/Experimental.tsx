import React, { useState } from 'react';
import { Sparkles, RefreshCcw, ToggleLeft, ToggleRight } from 'lucide-react';

export const Experimental = () => {
  const [activeMode, setActiveMode] = useState<'wireframe' | 'fidelity'>('fidelity');

  return (
    <section id="ai-lab" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-64 bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-fuchsia-600 font-bold mb-2">
              <Sparkles size={20} />
              <span className="uppercase tracking-widest text-sm">AI Lab</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Experimental Concepts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
              Exploring the intersection of Generative AI and UI patterns. 
              Toggle the view to see how I use AI for rapid layout iteration.
            </p>
          </div>

          <button 
            onClick={() => setActiveMode(prev => prev === 'wireframe' ? 'fidelity' : 'wireframe')}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {activeMode === 'wireframe' ? 'Show High-Fidelity' : 'Show Wireframe'}
            </span>
            {activeMode === 'wireframe' ? <ToggleLeft size={24} /> : <ToggleRight size={24} className="text-indigo-600" />}
          </button>
        </div>

        {/* Interactive Demo Area */}
        <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 md:p-12 overflow-hidden min-h-[500px] flex items-center justify-center">
          
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          {/* Content that changes based on state */}
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
            
            {/* Header */}
            <div className={`h-40 p-6 flex flex-col justify-end transition-colors duration-500 ${
              activeMode === 'fidelity' 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                : 'bg-slate-200 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700'
            }`}>
              {activeMode === 'fidelity' ? (
                <h3 className="text-2xl font-bold text-white">Morning, Naveen</h3>
              ) : (
                <div className="w-1/2 h-8 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
              )}
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 transition-all duration-500 ${
                    activeMode === 'fidelity' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200 dark:bg-slate-800'
                  }`}></div>
                  <div className="flex-1 space-y-2">
                    <div className={`h-4 rounded transition-all duration-500 ${
                      activeMode === 'fidelity' ? 'w-3/4 bg-slate-800 dark:bg-slate-200' : 'w-full bg-slate-200 dark:bg-slate-800'
                    }`}></div>
                    <div className={`h-3 rounded transition-all duration-500 ${
                      activeMode === 'fidelity' ? 'w-1/2 bg-slate-400' : 'w-2/3 bg-slate-100 dark:bg-slate-900'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Action */}
            <div className="p-6 pt-0">
               <button className={`w-full py-3 rounded-xl font-bold transition-all duration-500 ${
                 activeMode === 'fidelity' 
                   ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                   : 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 border border-slate-300 dark:border-slate-700 border-dashed'
               }`}>
                 {activeMode === 'fidelity' ? 'Start Assessment' : 'Action Button'}
               </button>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-mono text-slate-400">
             <RefreshCcw size={12} className={activeMode === 'fidelity' ? 'animate-spin' : ''}/>
             <span>Simulated State: {activeMode.toUpperCase()}</span>
          </div>

        </div>
      </div>
    </section>
  );
};