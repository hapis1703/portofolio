import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchGitHubProfile, FALLBACK_PROFILE } from "../utils/api";

export default function Hero({ theme }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubProfile()
      .then((data) => setProfile(data || FALLBACK_PROFILE))
      .catch(() => setProfile(FALLBACK_PROFILE))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center px-4 py-20 ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="text-center">
          <div
            className={`w-32 h-32 mx-auto mb-6 rounded-full animate-pulse ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}
          />
          <div
            className={`h-8 w-64 mx-auto mb-4 rounded animate-pulse ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}
          />
          <div
            className={`h-6 w-96 mx-auto rounded animate-pulse ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 py-20 relative ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <motion.img
            src={profile.avatar_url}
            alt={profile.name || "Hafizh"}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.1 }}
            className={`w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 object-cover ${theme === "dark" ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]" : "border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]"}`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <h1
            className={`text-5xl md:text-7xl font-black mb-4 ${theme === "dark" ? "bg-gradient-to-r from-cyan-300 to-purple-300" : "bg-gradient-to-r from-cyan-600 to-purple-600"} bg-clip-text text-transparent`}
          >
            Hi, I'm Ahmad Hafizh 👋
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed space-y-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
        >
          {profile.bio && <p className="font-medium">{profile.bio}</p>}
          <p>
            I build web applications, craft automation bots, and love blending
            code with visual creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition shadow-lg duration-100 ${theme === "dark" ? "bg-cyan-500 text-white hover:bg-cyan-600" : "bg-cyan-600 text-white hover:bg-cyan-700"}`}
          >
            View Projects <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition duration-100 ${theme === "dark" ? "border-cyan-500 text-cyan-300 hover:bg-cyan-500/10" : "border-cyan-600 text-cyan-600 hover:bg-cyan-600/10"}`}
          >
            Contact Me <Mail size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
