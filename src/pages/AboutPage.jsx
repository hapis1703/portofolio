import { motion } from 'framer-motion';

export default function AboutPage({ colors }) {
  return (
    <section className={`min-h-screen py-20 px-4 ${colors.bgAlt}`}>
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${colors.text}`}>Beyond Code</h2>
          <p className={colors.textMuted}>What I do when I'm not coding</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className={`rounded-2xl p-8 border backdrop-blur-md transition duration-100 ${colors.card}`}
        >
          <p className={`text-lg leading-relaxed ${colors.textMuted}`}>
            I'm a 16-year-old student at SMAN 11 Bekasi with a deep curiosity for technology. When I'm not writing code, managing servers, or tinkering with system utilities, I'm usually <strong className={`text-${colors.primary}`}>exploring the gaming world</strong>, <strong className={`text-${colors.primary}`}>fine-tuning my guitar skills</strong>, <strong className={`text-${colors.primary}`}>keeping up with the Marvel universe</strong>, or <strong className={`text-${colors.primary}`}>designing digital posters and comics</strong>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { emoji: '🎮', title: 'Gaming' },
              { emoji: '🎸', title: 'Music' },
              { emoji: '🦸', title: 'Marvel' },
              { emoji: '🎨', title: 'Design' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition duration-100 ${colors.card} ${colors.cardHover}`}
              >
                <span className="text-3xl mb-2">{item.emoji}</span>
                <span className={`text-sm font-medium ${colors.textMuted}`}>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
