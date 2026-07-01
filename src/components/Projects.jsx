import React from 'react';
import { ExternalLink, ShieldAlert, Users, Smartphone, Utensils } from 'lucide-react';
import restoImg from '../assets/resto.png';
import cpqiImg from '../assets/cpqi.webp';

const Github = ({ size = 24, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Keylogger Creation & Detection',
      period: 'Oct 2025 – Dec 2025',
      category: 'Security & Automation',
      description: 'Designed a consent-based cross-platform Python keylogger capturing keystrokes, timestamps, active window titles, and process telemetry while simulating attacker techniques including silent execution and controlled data exfiltration.',
      tech: ['Python', 'Telemetry', 'Security Audit', 'Cross-Platform'],
      github: 'https://github.com/mwisemarierose',
      demo: null,
      icon: <ShieldAlert className="w-8 h-8 text-rose-500" />
    },
    {
      title: 'Cross-Cultural Extremism Analysis',
      period: 'Jan 2026 – May 2026',
      category: 'AI/ML & NLP',
      description: 'Designed and conducted a perspectivist annotation study with 34 African annotators across English and Kinyarwanda to evaluate cultural bias in Western AI extremism detection systems.',
      tech: ['Python', 'NLP', 'Data Ethics', 'Perspectivist Annotation'],
      github: 'https://github.com/mwisemarierose',
      demo: null,
      icon: <Users className="w-8 h-8 text-cyan-500" />
    },
    {
      title: 'CPQI Mobile Application',
      period: 'Early 2024',
      category: 'Mobile Development',
      description: 'Built an Android app for coffee washing stations to run daily Coffee Processing and Quality Index (CPQI) audits, scoring checklist items across cherry reception, processing, drying, and storage to regulate incoming coffee quality.',
      tech: ['Kotlin', 'XML', 'Android'],
      github: null,
      demo: 'https://play.google.com/store/apps/details?id=com.technoserve.cpqi',
      demoLabel: 'Play Store',
      image: cpqiImg,
      icon: <Smartphone className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Multi-restaurant Web App',
      period: 'Early Work',
      category: 'Web Development',
      description: 'A responsive multi-restaurant service dashboard where several partner restaurants connect to digitally manage customer orders, catalogs, and food deliveries.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
      github: 'https://github.com/mwisemarierose',
      demo: null,
      image: restoImg,
      icon: <Utensils className="w-8 h-8 text-indigo-500" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-zinc-300 mt-4">
            A showcase of my recent academic research and software development work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200/50 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/95 dark:shadow-lg dark:shadow-black/25 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card visual banner */}
              {project.image ? (
                <div className="h-48 overflow-hidden relative border-b border-slate-200/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white border border-white/10">
                    {project.category}
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-zinc-100 dark:bg-zinc-800 flex flex-col items-center justify-center relative border-b border-slate-200/10 dark:border-zinc-600/40">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5" />
                  <div className="p-4 rounded-full bg-white dark:bg-zinc-800 shadow-md z-10 border border-slate-200/10 dark:border-zinc-600/40">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-750 dark:text-indigo-300 border border-indigo-500/10 z-10">
                    {project.category}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-zinc-400 tracking-wider uppercase">
                      {project.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-zinc-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and actions */}
                <div className="mt-6">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-200 border border-slate-200/50 dark:border-zinc-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-zinc-600/40">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        {project.demoLabel || 'Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
