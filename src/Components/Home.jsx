import React, { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import background from "../Assets/Images/background.jpg";
import profileImage from "../Assets/Images/profileimage.jpg"
import akeem1Image from "../Assets/Images/akeem1.jpg";
import { Box } from "@mui/material";
import { ReactTyped } from "react-typed";
import { useSpring, animated } from "react-spring";

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
  const [isDelaying, setIsDelaying] = useState(false);
  const handleMouseEnter = () => {
    if (!isDelaying) {
      setIsDelaying(true);
      setTimeout(() => {
        setHovered(true);
        setIsDelaying(false);
      }, 500); // 200 milliseconds delay before setting hovered to true
    }
  };

  const handleMouseLeave = () => {
    if (!isDelaying) {
      setIsDelaying(true);
      setTimeout(() => {
        setHovered(false);
        setIsDelaying(false);
      }, 500); // 200 milliseconds delay before setting hovered to false
    }
  };
  const imageProps = useSpring({
    transform: hovered ? "scaleX(-1)" : "scaleX(1)", // Flip the image horizontally
    config: { duration: 300 }, // Adjust the duration as needed (300 milliseconds in this example)
  });

  return (
    init && (
      <Box
        sx={{
          position: "relative",
          height: "100vh",
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
              width: "350px", // Set the width to 200px
              height: "350px", // Set the height to 200px
              borderRadius: "50%", // Make the image appear as a circle
              borderColor: "#2C3E50",
              border: "4px solid #2C3E50", // Add an outlined border with 2px width and #2C3E50 color
              position: "absolute",
              top: "5%", // Center the image vertically
              left: "40%", // Center the image horizontally
              zIndex: 9999,
              transform: "translate(-50%, -50%)", // Center the image both horizontally and vertically
              cursor: "pointer",
              ...imageProps,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Box>

        <Box>
          <ReactTyped
            strings={["Akeem McKenzie"]}
            typeSpeed={50}
            style={{ color: "#ffffff", fontSize: "4rem" }}
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
            style={{ color: "#ffffff", fontSize: "2rem", fontStyle: "italic" }}
          />
        </Box>
      </Box>
    )
  );
};

export default Home;
