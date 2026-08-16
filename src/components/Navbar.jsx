import { Menu, X, Moon, Sun, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { themes } from '../themes';

export default function Navbar({ isDark, setIsDark, currentTheme, setCurrentTheme, colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const location = useLocation();

  const toggleTheme = () => setIsDark(d => !d);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Donate', to: '/donate' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition duration-100 ${colors.bg}/70 ${colors.border}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.1 }}
            className={`text-2xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
          >
            Hapis
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.label} to={link.to}>
              <motion.div
                whileHover={{ y: -1 }}
                transition={{ duration: 0.1 }}
                className={`text-sm font-medium transition duration-100 ${location.pathname === link.to ? `text-${colors.primary}` : `${colors.textMuted} hover:text-${colors.primary}`}`}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}
          
          <div className="relative">
            <motion.button
              onClick={() => setShowThemes(!showThemes)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className={`p-2 rounded-lg transition duration-100 ${colors.card}`}
            >
              <Palette size={20} />
            </motion.button>

            <AnimatePresence>
              {showThemes && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 p-2 rounded-xl border backdrop-blur-xl ${colors.card} min-w-[150px]`}
                >
                  {Object.entries(themes).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setCurrentTheme(key);
                        setShowThemes(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${currentTheme === key ? `text-${colors.primary} ${colors.card}` : `${colors.textMuted} hover:${colors.card}`}`}
                    >
                      {value.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`p-2 rounded-lg transition duration-100 ${colors.card}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`p-2 rounded-lg transition duration-100 ${colors.card}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className={`p-2 ${colors.text}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${colors.border} ${colors.card} backdrop-blur-xl`}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium ${location.pathname === link.to ? `text-${colors.primary}` : `${colors.textMuted} hover:text-${colors.primary}`}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t ${colors.border}">
                <p className={`text-xs font-semibold ${colors.textMuted}`}>Themes</p>
                {Object.entries(themes).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key);
                      setIsOpen(false);
                    }}
                    className={`text-left text-sm font-medium transition ${currentTheme === key ? `text-${colors.primary}` : `${colors.textMuted}`}`}
                  >
                    {value.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}