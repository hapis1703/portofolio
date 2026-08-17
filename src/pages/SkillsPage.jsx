import { motion } from "framer-motion";

export default function SkillsPage({ colors }) {
  const skillCategories = [
    {
      title: "Frameworks & Tech",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "Google Apps Script",
      ],
    },
    {
      title: "Infrastructure",
      skills: ["Vercel", "Railway", "Cloudflare", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Tailwind CSS", "VS Code", "Canva", "CapCut"],
    },
  ];

  return (
    <section className={`min-h-screen py-20 px-4 ${colors.bgAlt}`}>
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${colors.text}`}>
            Tech Stack
          </h2>
          <p className={colors.textMuted}>Tools I use to build</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className={`rounded-xl p-6 border backdrop-blur-md transition duration-100 ${colors.card} ${colors.cardHover}`}
            >
              <h3 className={`text-lg font-bold mb-4 text-${colors.primary}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition duration-100 ${colors.card}`}
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
