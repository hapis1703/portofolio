import { motion } from 'framer-motion';
import { Mail, Code2, Camera, Send } from 'lucide-react';
import { useState } from 'react';
import { sendDiscordMessage } from '../utils/api';

export default function ContactPage({ colors }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const success = await sendDiscordMessage(formData.name, formData.email, formData.message);
    
    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={`min-h-screen py-20 px-4 ${colors.bgAlt}`}>
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${colors.text}`}>Get In Touch</h2>
          <p className={colors.textMuted}>Let's work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${colors.text}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={`rounded-2xl p-6 border backdrop-blur-md ${colors.card}`}>
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${colors.textMuted}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-${colors.primary} ${colors.card} ${colors.text}`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${colors.textMuted}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-${colors.primary} ${colors.card} ${colors.text}`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${colors.textMuted}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-${colors.primary} resize-none ${colors.card} ${colors.text}`}
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  transition={{ duration: 0.1 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition duration-100 ${status === 'success' ? 'bg-green-500 text-white' : status === 'error' ? 'bg-red-500 text-white' : `${colors.button} text-white`} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : status === 'error' ? '✗ Failed' : <>Send Message <Send size={18} /></>}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${colors.text}`}>Contact Info</h3>
            
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${colors.card} ${colors.cardHover}`}
              >
                <div className="flex items-center gap-3">
                  <Mail className={`text-${colors.primary}`} size={20} />
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${colors.textMuted}`}>Email</p>
                    <a href="mailto:hepiss1703@gmail.com" className={`font-medium ${colors.text} hover:text-${colors.primary} transition`}>
                      hepiss1703@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${colors.card} ${colors.cardHover}`}
              >
                <div className="flex items-center gap-3">
                  <Camera className={`text-${colors.primary}`} size={20} />
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${colors.textMuted}`}>Instagram</p>
                    <a href="https://instagram.com/hapisges" target="_blank" rel="noreferrer" className={`font-medium ${colors.text} hover:text-${colors.primary} transition`}>
                      @hapisges
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>Connect</h3>
            <div className="space-y-3">
              {[
                { icon: <Code2 size={20} />, label: 'GitHub', link: 'https://github.com/hapis1703' },
                { icon: <Camera size={20} />, label: 'Instagram', link: 'https://instagram.com/hapisges' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${colors.card} ${colors.cardHover}`}
                >
                  <div className={`text-${colors.primary}`}>
                    {social.icon}
                  </div>
                  <span className={`font-medium ${colors.text}`}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <footer className={`mt-20 pt-8 border-t text-center ${colors.border}`}>
          <p className={colors.textMuted}>
            © 2026 Hafizh. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
