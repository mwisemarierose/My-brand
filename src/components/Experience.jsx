import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Research Assistant – Kinyarwanda ASR for Health & Agriculture',
      company: 'Carnegie Mellon University',
      location: 'Kigali, Rwanda',
      period: 'May 2026 - Present',
      description: [
        'Supporting the development of Kinyarwanda ASR systems for health applications through speech data preparation, model fine-tuning, performance evaluation, and research on low-resource speech technologies.',
        'Focusing on improving recognition accuracy for domain-specific vocabulary.'
      ],
      current: true
    },
    {
      role: 'Frontend Developer',
      company: 'Semanticservices Rwanda',
      location: 'Kigali, Rwanda (Hybrid)',
      period: 'January 2025 - Present',
      description: [
        'Contributing to compliance automation and cloud-based enterprise solutions.',
        'Working on frontend and backend development using React, TypeScript, Node.js, and Azure services.',
        'Hands-on experience in NIST/OSCAL compliance workflows, CI/CD automation, XML validation, API integration, and secure cloud infrastructure.'
      ],
      current: true
    },
    {
      role: 'Software Developer',
      company: 'MyDevConnect',
      location: 'Remote',
      period: 'June 2024 - July 2025',
      description: [
        'Developed new game features and logic to expand core gameplay.',
        'Built and integrated RESTful APIs for player stats, leaderboards, and matchmaking.',
        'Enhanced server performance and reduced response times through code optimization.'
      ],
      current: false
    },
    {
      role: 'Software Developer Intern',
      company: 'TechnoServe',
      location: 'Kigali, Rwanda',
      period: 'February 2024 - June 2024',
      description: [
        'Developed a mobile application using Kotlin for Android.',
        'Designed features to manage and track daily checklists at coffee washing stations.'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Work Experience</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-zinc-300 mt-4">
            My professional career path and achievements
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line helper */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-slate-200 dark:bg-zinc-600 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-zinc-600 -translate-x-1/2 sm:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col sm:flex-row items-stretch ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline point */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-zinc-900 bg-indigo-600 flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    <Briefcase size={12} className="text-white" />
                  </div>

                  {/* Spacer for large screens */}
                  <div className="w-full sm:w-1/2 px-8 hidden sm:block" />

                  {/* Card Panel */}
                  <div className="w-full sm:w-1/2 pl-12 pr-4 sm:px-8">
                    <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/95 dark:shadow-lg dark:shadow-black/25 shadow-md hover:shadow-xl transition-all duration-300 relative group">
                      
                      {/* Current tag banner */}
                      {exp.current && (
                        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-indigo-100 dark:bg-indigo-500/25 text-indigo-700 dark:text-indigo-200 px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}

                      {/* Header details */}
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-zinc-300 font-medium mt-1 mb-4">
                        <span className="font-semibold text-slate-700 dark:text-zinc-100">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description bullet points */}
                      <ul className="space-y-2">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-sm text-slate-600 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
