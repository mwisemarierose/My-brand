import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgPattern from './assets/bg-pattern.webp';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative text-zinc-800 dark:text-zinc-100 transition-colors duration-300 antialiased selection:bg-indigo-500/30">
      {/* Unified background with theme-aware overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={bgPattern}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-90 dark:opacity-65 dark:brightness-95 dark:saturate-75 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-white/65 dark:bg-zinc-800/68 transition-colors duration-500" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
