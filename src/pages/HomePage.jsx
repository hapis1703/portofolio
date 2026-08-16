import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGitHubProfile, FALLBACK_PROFILE } from '../utils/api';

export default function HomePage({ colors }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubProfile()
      .then(data => setProfile(data || FALLBACK_PROFILE))
      .catch(() => setProfile(FALLBACK_PROFILE))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${colors.bg}`}>
        <div className="text-center">
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full animate-pulse ${colors.card}`} />
          <div className={`h-8 w-64 mx-auto mb-4 rounded animate-pulse ${colors.card}`} />
          <div className={`h-6 w-96 mx-auto rounded animate-pulse ${colors.card}`} />
        </div>
      </section>
    );
  }

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 relative ${colors.bg}`}>
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <motion.img
            src={profile.avatar_url}
            alt={profile.name || 'Hafizh'}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.1 }}
            className={`w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 object-cover border-${colors.primary} shadow-[0_0_30px_rgba(34,211,238,0.3)]`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <h1 className={`text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
            Hi, I'm Ahmad Hafizh 👋
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed space-y-2 ${colors.textMuted}`}
        >
          {profile.bio && <p className="font-medium">{profile.bio}</p>}
          <p>I build web applications, craft automation bots, and love blending code with visual creativity.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              to="/projects"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition shadow-lg duration-100 ${colors.button} text-white`}
            >
              View Projects <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition duration-100 border-${colors.primary} text-${colors.primary} hover:bg-${colors.primary}/10`}
            >
              Contact Me <Mail size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
