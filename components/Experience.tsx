
import React from 'react';
import { Building2, Calendar, CheckCircle2, Briefcase, Palette, Laptop, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "UI/UX Designer",
      company: "Sajal Tech Solutions",
      companyUrl: "#",
      period: "Nov 2024 – Present",
      isCurrent: true,
      description: "At Sajal, I design clean, modern, and user-centered digital products across web and mobile. I focus on crafting responsive interfaces and scalable design systems.",
      achievements: [
        "Turning product ideas into thoughtful UI/UX solutions",
        "Creating high-fidelity screens, prototypes, and interaction flows",
        "Collaborating with developers & product teams to ship real features",
        "Enhancing usability through clarity, structure, and consistency"
      ],
      skills: ["Product Thinking", "Design Systems", "Figma", "User Flow"],
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      id: 2,
      role: "UI/UX Design Intern",
      company: "App Innovation Technologies",
      companyUrl: "#",
      period: "Apr 2024 – Oct 2024",
      isCurrent: false,
      description: "This internship gave me hands-on experience designing across multiple domains — domain marketplaces, finance dashboards, and service-based web apps.",
      achievements: [
        "Designing responsive websites, mobile apps, and smooth user flows",
        "Building wireframes, UI layouts, and interactive prototypes",
        "Improving designs based on user needs and business requirements",
        "Exploring diverse visual styles and learning real client workflows"
      ],
      skills: ["Wireframing", "Prototyping", "Visual Design", "Client Workflows"],
      gradient: "from-fuchsia-500 to-rose-500"
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-slate-50 dark:bg-[#0B0B0B] transition-colors overflow-hidden">
      
      {/* --- SMOOTH ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Floating Gradient Blobs */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
         
         {/* Subtle Perspective Grid */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
              style={{ 
                  backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)', 
                  backgroundSize: '50px 50px',
                  maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
              }}>
         </div>

         {/* Vertical Flow Line */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
            <div className="mb-20 text-center md:text-left relative">
                {/* Decorative Icon */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <Briefcase size={14} /><span>Career Path</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                   Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Experience</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                   My journey in the design industry, contributing to real-world products and solving complex user problems with precision and creativity.
                </p>
            </div>
        </Reveal>
        
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-px bg-slate-200 dark:bg-white/10 hidden md:block overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-[shine_3s_ease-in-out_infinite]"></div>
          </div>
          <div className="absolute left-4 top-4 bottom-0 w-px bg-slate-200 dark:bg-white/10 md:hidden"></div>
          
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 200}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                        <div className={`relative w-4 h-4 rounded-full border-4 border-white dark:border-[#0B0B0B] shadow-[0_0_0_4px_rgba(241,245,249,1)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-colors duration-500 ${exp.isCurrent ? 'bg-indigo-500' : 'bg-slate-400'}`}>
                            {exp.isCurrent && (
                                <>
                                  <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75"></div>
                                  <div className="absolute -inset-3 rounded-full border border-indigo-500/30 animate-[spin_4s_linear_infinite]">
                                     <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                  </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Date Bubble */}
                    <div className={`md:w-1/2 flex items-start ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} pl-12 md:pl-0`}>
                        <div className={`group relative overflow-hidden px-5 py-2.5 rounded-2xl border transition-all duration-300 ${exp.isCurrent ? 'bg-white dark:bg-white/5 border-emerald-200 dark:border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/5'}`}>
                            <div className="relative z-10 flex items-center gap-2 text-sm font-bold">
                                <Calendar size={14} className={exp.isCurrent ? 'text-emerald-500' : 'text-slate-400'} />
                                <span className={exp.isCurrent ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}>{exp.period}</span>
                            </div>
                            <div className="absolute inset-0 bg-slate-50 dark:bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-12 md:pl-0`}>
                        <div className="group relative perspective-1000">
                            {/* Glassmorphic Card */}
                            <div className="relative p-8 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-slate-200 dark:border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 overflow-hidden">
                                
                                {/* Inner Ambient Hover Effect */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${exp.gradient} opacity-[0.03] rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700`}></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${exp.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                                {exp.isCurrent ? <Palette size={20} /> : <Laptop size={20} />}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                                                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    <Building2 size={14} /><span>{exp.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] font-light">
                                        {exp.description}
                                    </p>
                                    
                                    <ul className="space-y-3 mb-8">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 group/item">
                                                <div className="mt-0.5 min-w-[16px]">
                                                    <CheckCircle2 size={16} className={`text-slate-300 dark:text-slate-600 group-hover/item:text-indigo-500 transition-colors`} />
                                                </div>
                                                <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                                        {exp.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Card Glow Highlight */}
                            <div className="absolute inset-x-8 bottom-0 h-4 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full translate-y-4"></div>
                        </div>
                    </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
