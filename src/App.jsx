import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-400 selection:text-white ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <ParticleBackground theme={theme} />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <About theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}