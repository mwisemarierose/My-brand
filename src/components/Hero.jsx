import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Rose</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
          Software Developer & AI/ML Engineer
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
          I build secure, high-performance software systems and research applied AI, speech technologies (ASR), and NLP for low-resource languages and real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 gap-2 w-full sm:w-auto cursor-pointer"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 dark:border-zinc-600 bg-white hover:bg-zinc-50 dark:bg-zinc-800 hover:dark:bg-zinc-700 text-slate-700 dark:text-zinc-100 font-semibold transition-all w-full sm:w-auto cursor-pointer"
          >
            About Me
          </a>
        </div>

        <div className="flex items-center justify-center space-x-6 pt-4">
          <a
            href="https://github.com/mwisemarierose"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mwiseneza"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mwisemarierose@gmail.com"
            className="text-slate-500 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
