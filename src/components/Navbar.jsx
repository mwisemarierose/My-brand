import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md shadow-sm py-4 border-b border-zinc-200/60 dark:border-zinc-700/50' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-end items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-450 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer border border-zinc-200/20 dark:border-zinc-800/30"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer border border-zinc-200/20 dark:border-zinc-800/30"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 shadow-xl py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-zinc-650 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
