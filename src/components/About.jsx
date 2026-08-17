import { motion } from "framer-motion";

export default function About({ theme }) {
  return (
    <section
      id="about"
      className={`py-20 px-4 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-4xl mx-auto z-10 relative">
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
            Beyond Code
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className={`rounded-2xl p-8 border backdrop-blur-md transition duration-100 ${theme === "dark" ? "bg-slate-800/30 border-slate-700" : "bg-white/60 border-slate-200"}`}
        >
          <p
            className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
          >
            When I'm not writing code or managing servers, I'm usually{" "}
            <strong
              className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
            >
              exploring the gaming world
            </strong>
            ,{" "}
            <strong
              className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
            >
              fine-tuning my guitar skills
            </strong>
            ,{" "}
            <strong
              className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
            >
              keeping up with the Marvel universe
            </strong>
            , or{" "}
            <strong
              className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
            >
              sketching out digital designs
            </strong>
            .
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { emoji: "🎮", title: "Gaming" },
              { emoji: "🎸", title: "Music" },
              { emoji: "🦸", title: "Marvel" },
              { emoji: "🎨", title: "Design" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.1 }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition duration-100 ${theme === "dark" ? "bg-slate-900/50 border-slate-700 hover:border-cyan-500/50" : "bg-slate-100/50 border-slate-200 hover:border-cyan-300"}`}
              >
                <span className="text-3xl mb-2">{item.emoji}</span>
                <span
                  className={`text-sm font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
