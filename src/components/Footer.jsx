import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-zinc-200/60 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
            Marie Rose Mwiseneza
          </h2>
          <p className="text-xs mt-1 text-slate-500">
            Software Developer & Researcher
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-6 text-sm">
          <li>
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </li>
        </ul>

        <div className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Marie Rose Mwiseneza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
