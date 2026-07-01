import React from 'react';
import { Download, Award, Briefcase, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Briefcase className="text-indigo-500" size={20} />,
      title: 'Experience',
      value: '2+ Years',
    },
    {
      icon: <Award className="text-purple-500" size={20} />,
      title: 'Certifications',
      value: '6+',
    },
    {
      icon: <Globe className="text-pink-500" size={20} />,
      title: 'Languages',
      value: 'Bilingual',
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Information Technology',
      school: 'Carnegie Mellon University Africa',
      location: 'Kigali, Rwanda',
      period: '2025 - 2027',
      featured: true
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of Rwanda',
      location: 'Kigali, Rwanda',
      period: '2019 - 2024',
      featured: false
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">About & Education</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Stats and Intro Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Academic & Technical Focus
              </h3>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                I am a developer and researcher focused on building secure web applications, automated compliance systems, and speech technologies (ASR) in low-resource environments.
              </p>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl border border-slate-200/60 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/95 dark:shadow-md dark:shadow-black/20 hover:border-indigo-500/30 transition-all text-center"
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <h4 className="text-[10px] font-bold text-slate-400 dark:text-zinc-400 uppercase tracking-wider">{stat.title}</h4>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Download CV button */}
            <div>
              <a 
                href="/resume.pdf" 
                download="Marie_Rose_Mwiseneza_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25 transition-all gap-2 cursor-pointer text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Education Timeline Cards Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="text-indigo-500" />
              Education Timeline
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    edu.featured 
                      ? 'border-indigo-500/30 bg-white dark:bg-zinc-900/95 shadow-md ring-1 ring-indigo-500/10 dark:shadow-md dark:shadow-black/20' 
                      : 'border-slate-200/60 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/90 dark:shadow-md dark:shadow-black/15'
                  }`}
                >
                  {/* Decorative corner glow for featured school */}
                  {edu.featured && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                  )}

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 mt-1">
                        {edu.school}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-zinc-400 mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                    
                    <span className={`self-start text-xs font-bold px-3 py-1 rounded-full shrink-0 ${
                      edu.featured 
                        ? 'bg-indigo-150 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300' 
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
