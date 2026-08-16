import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import { getThemeColors } from './themes';

export default function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true' || true);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentTheme') || 'modern');

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    localStorage.setItem('currentTheme', currentTheme);
  }, [isDark, currentTheme]);

  const colors = getThemeColors(currentTheme, isDark);

  return (
    <Router>
      <div className={`min-h-screen font-sans selection:bg-${colors.primary} selection:text-white ${colors.bg} ${colors.text}`}>
        <ParticleBackground colors={colors} isDark={isDark} />
        <Navbar isDark={isDark} setIsDark={setIsDark} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} colors={colors} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage colors={colors} />} />
            <Route path="/skills" element={<SkillsPage colors={colors} />} />
            <Route path="/projects" element={<ProjectsPage colors={colors} />} />
            <Route path="/about" element={<AboutPage colors={colors} />} />
            <Route path="/contact" element={<ContactPage colors={colors} />} />
            <Route path="/donate" element={<DonatePage colors={colors} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}