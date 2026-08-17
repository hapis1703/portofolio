import { motion } from "framer-motion";

export default function AnimatedBackground({ theme }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 ${theme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}
      />

      {/* Moving orbs */}
      <div className="absolute inset-0">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 ${
              theme === "dark"
                ? i % 2 === 0
                  ? "bg-cyan-500/30"
                  : "bg-purple-500/30"
                : i % 2 === 0
                  ? "bg-cyan-300/30"
                  : "bg-purple-300/30"
            }`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Animated grid */}
      <div
        className={`absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]`}
      >
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className={`absolute w-[2px] h-[2px] rounded-full ${
              theme === "dark" ? "bg-cyan-400/50" : "bg-cyan-500/50"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Light mode gradient overlay */}
      {theme === "light" && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 via-transparent to-slate-50/10" />
      )}
    </div>
  );
}
