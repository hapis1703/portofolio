import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({ colors, isDark }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInit(true);
    }
  }, []);

  const getColorValue = (colorClass) => {
    const colorMap = {
      "cyan-400": "#22d3ee",
      "cyan-600": "#0891b2",
      "purple-400": "#c084fc",
      "purple-600": "#7c3aed",
      "amber-400": "#fbbf24",
      "amber-600": "#d97706",
      "orange-400": "#fb923c",
      "orange-700": "#c2410c",
      "fuchsia-500": "#d946ef",
      "fuchsia-600": "#c026d3",
      "lime-400": "#a3e635",
      "lime-600": "#65a30d",
      "blue-400": "#60a5fa",
      "blue-600": "#2563eb",
      "teal-400": "#2dd4bf",
      "teal-600": "#0d9488",
      "emerald-400": "#34d399",
      "emerald-600": "#059669",
      "green-400": "#4ade80",
      "green-600": "#16a34a",
      "rose-400": "#fb7185",
      "rose-600": "#e11d48",
      "pink-400": "#f472b6",
      "pink-600": "#db2777",
      "slate-950": "#020617",
      "slate-50": "#f8fafc",
      "amber-950": "#451a03",
      "amber-50": "#fffbeb",
      black: "#000000",
      white: "#ffffff",
      "zinc-950": "#09090b",
      "zinc-50": "#fafafa",
      "blue-950": "#172554",
      "blue-50": "#eff6ff",
      "emerald-950": "#022c22",
      "emerald-50": "#ecfdf5",
      "rose-950": "#4c0519",
      "rose-50": "#fff1f2",
    };
    return colorMap[colorClass] || "#22d3ee";
  };

  const bgColor = colors.bg.replace("bg-", "");
  const primaryColor = colors.primary;
  const secondaryColor = colors.secondary;

  const particleOptions = {
    background: {
      color: {
        value: getColorValue(bgColor),
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: getColorValue(primaryColor),
      },
      links: {
        color: getColorValue(secondaryColor),
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={async (engine) => {
          await loadSlim(engine);
        }}
        options={particleOptions}
      />
    </div>
  );
}
