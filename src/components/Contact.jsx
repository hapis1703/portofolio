import { motion } from 'framer-motion';
import { Mail, Code2, Camera, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Let's work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={`rounded-2xl p-6 border backdrop-blur-md ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700' : 'bg-white/60 border-slate-200'}`}>
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700 text-white' : 'bg-white/50 border-slate-300 text-slate-900'}`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700 text-white' : 'bg-white/50 border-slate-300 text-slate-900'}`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none ${theme === 'dark' ? 'bg-slate-900/50 border-slate-700 text-white' : 'bg-white/50 border-slate-300 text-slate-900'}`}
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  transition={{ duration: 0.1 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition duration-100 ${status === 'success' ? 'bg-green-500 text-white' : theme === 'dark' ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-cyan-600 text-white hover:bg-cyan-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : <>Send Message <Send size={18} /></>}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact Info</h3>
            
            <div className={`space-y-4 mb-8`}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
                className={`p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700 hover:border-cyan-500/50' : 'bg-white/60 border-slate-200 hover:border-cyan-300'}`}
              >
                <div className="flex items-center gap-3">
                  <Mail className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} size={20} />
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Email</p>
                    <a href="mailto:hepiss1703@gmail.com" className={`font-medium ${theme === 'dark' ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-cyan-600'} transition`}>
                      hepiss1703@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
                className={`p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700 hover:border-cyan-500/50' : 'bg-white/60 border-slate-200 hover:border-cyan-300'}`}
              >
                <div className="flex items-center gap-3">
                  <Camera className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} size={20} />
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Instagram</p>
                    <a href="https://instagram.com/hapisges" target="_blank" rel="noreferrer" className={`font-medium ${theme === 'dark' ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-cyan-600'} transition`}>
                      @hapisges
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Connect</h3>
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm transition duration-100 ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700 hover:border-cyan-500/50' : 'bg-white/60 border-slate-200 hover:border-cyan-300'}`}
                >
                  <div className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}>
                    {social.icon}
                  </div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className={`mt-20 pt-8 border-t text-center ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          © 2026 Hafizh. Built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}