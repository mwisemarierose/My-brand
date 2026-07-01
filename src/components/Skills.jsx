import React from 'react';
import { Code2, Brain, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-indigo-500" size={24} />,
      skills: ['JavaScript', 'Java', 'C', 'C++', 'Python', 'Kotlin']
    },
    {
      title: 'AI / Machine Learning',
      icon: <Brain className="text-purple-500" size={24} />,
      skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Databases',
      icon: <Database className="text-pink-500" size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite']
    },
    {
      title: 'Collaboration & Tools',
      icon: <span className="text-cyan-500 text-lg font-bold">⚙️</span>,
      skills: ['Git', 'Pivotal Tracker', 'Asana', 'ClickUp']
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-zinc-300 mt-4">
            A comprehensive overview of my core competencies
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-slate-200/50 dark:border-zinc-600/60 bg-white/80 dark:bg-zinc-900/95 dark:shadow-lg dark:shadow-black/25 backdrop-blur-sm flex flex-col hover:shadow-lg transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-slate-200/10 dark:border-zinc-600/40">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills pill list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-sm font-semibold px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200/40 dark:border-zinc-600/50 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
