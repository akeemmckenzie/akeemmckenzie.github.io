// ParticlesComp.js
import React, { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import background from "../Assets/Images/background.jpg";

const ParticlesComp = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      const engine = await initParticlesEngine();
      await loadSlim(engine);
      setInit(true);
    };
    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      image: `url(${background})`,
      repeat: "no-repeat",
      zIndex: 0,
      position: "center",
      size: "cover",
      opacity: 0.1
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
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 7 },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
  }), []);

  return (
    init && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          zIndex: -1,
        }}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    )
  );
};

export default ParticlesComp;