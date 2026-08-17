import { motion } from "framer-motion";

export default function Skills({ theme }) {
  const skillCategories = [
    {
      title: "Frameworks & Tech",
      skills: ["React", "Next.js", "Node.js"],
    },
    {
      title: "Infrastructure",
      skills: ["Vercel", "Railway", "Cloudflare"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl font-black mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Tech Stack
          </h2>
          <p
            className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Tools I use to build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className={`rounded-xl p-6 border backdrop-blur-md transition duration-100 ${theme === "dark" ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800/50" : "bg-white/60 border-slate-200 hover:bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-4 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.1 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition duration-100 ${theme === "dark" ? "bg-slate-700/50 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20" : "bg-slate-100 border-cyan-300 text-cyan-700 hover:bg-cyan-50"}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
