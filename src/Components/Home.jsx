import { Box } from "@mui/material";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useMemo, useState } from "react";
import { animated } from "react-spring";
import { ReactTyped } from "react-typed";
import akeem1Image from "../Assets/Images/akeem1.jpg";
import background from "../Assets/Images/background.jpg";
import profileImage from "../Assets/Images/profileimage.jpg";

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        setInit(true);
      });
    };
    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        image: `url(${background})`,
        repeat: "no-repeat",
        zIndex: 0,
        position: "center",
        size: "cover",
        opacity: 0.05,
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
    }),
    []
  );

  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    init && (
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            zIndex: -1,
          }}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </Box>
        <Box>
          <animated.img
            src={hovered ? akeem1Image : profileImage}
            alt="Akeem"
            style={{
              maxWidth: "40%",
              height: "auto",
              borderRadius: "50%",
              borderColor: "#2C3E50",
              border: "4px solid #2C3E50",
              zIndex: 9999,
              cursor: "pointer",
              display: "flex",
              marginLeft: "30%",
              justifyContent: "center", 
              alignItems: "center",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Box>

        <Box>
          <ReactTyped
            strings={["Akeem McKenzie"]}
            typeSpeed={50}
            style={{ color: "#ffffff", display: "flex", fontSize: "150%"}}
          />
        </Box>
        <Box>
          <ReactTyped
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Front End Developer",
            ]}
            typeSpeed={10}
            backSpeed={40}
            loop
            style={{ color: "#ffffff", display: "flex", fontSize: "130%", fontStyle: "italic" }}
          />
        </Box>
      </Box>
    )
  );
};

export default Home;
