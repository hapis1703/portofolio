import { useEffect, useState } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({ theme }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInit(true);
    }
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: theme === 'dark' ? '#0f172a' : '#f8fafc',
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
        value: theme === 'dark' ? '#22d3ee' : '#0891b2',
      },
      links: {
        color: theme === 'dark' ? '#c084fc' : '#7c3aed',
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