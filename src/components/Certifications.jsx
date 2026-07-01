import React from 'react';
import { Brain, Sparkles, BookOpen, BarChart3, Network, Cpu } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Processing for LLMs',
      issuer: 'CodeSignal',
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      tagColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
    },
    {
      title: 'Modern Tokenization Techniques for AI & LLMs',
      issuer: 'CodeSignal',
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      tagColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
    },
    {
      title: 'Foundations of NLP Data Processing',
      issuer: 'CodeSignal',
      icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
      tagColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
    },
    {
      title: 'Deep Dive into NumPy and Pandas',
      issuer: 'CodeSignal',
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
      tagColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    },
    {
      title: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco Networking Academy',
      icon: <Network className="w-6 h-6 text-pink-500" />,
      tagColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
    },
    {
      title: 'Certificate of AI & IoT Engineering',
      issuer: 'JICA (Japan International Cooperation Agency)',
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      tagColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Certifications</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-zinc-300 mt-4">
            Professional milestones and certifications achieved
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/50 dark:border-zinc-600/60 bg-white/80 dark:bg-zinc-900/95 dark:shadow-lg dark:shadow-black/25 backdrop-blur-sm flex items-start space-x-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-slate-200/10 dark:border-zinc-600/40 shrink-0 group-hover:scale-105 transition-transform duration-300">
                {cert.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-zinc-300">
                  {cert.issuer}
                </p>
                <div className="pt-2">
                  <span className={`inline-flex items-center text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${cert.tagColor}`}>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
