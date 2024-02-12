import React from 'react';
import { Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Box, Accordion, AccordionSummary, AccordionDetails, Button, Chip } from '@mui/material';
import { FaArrowDown } from "react-icons/fa";
import projectImage1 from "../Assets/Images/projectImage1.png";
import projectImage2 from "../Assets/Images/projectImage2.png";
import projectImage3 from "../Assets/Images/projectImage3.png";
import projectImage4 from "../Assets/Images/projectImage4.png";
import projectImage5 from "../Assets/Images/projectImage5.png";
import projectImage6 from "../Assets/Images/projectImage6.jpg";

const Projects = () => {
  // Array of project objects
  const projects = [
    {
      title: 'Python CSV Comparison Tool',
      description: 'I created a CSV comparison tool used by professors to enhance their workflow within with data generated through a workflow or pulled from a database. This tool facilitated data comparison and analysis, enabling professors to make informed decisions more efficiently.',
      image: projectImage1,
      liveLink: 'https://github.com/akeemmckenzie/csvComparisonTool',
      disabled: false,
      tags: ["python", "pandas", "pysimplegui"]
    },
    {
      title: 'React PortFolio',
      description: `Crafted with precision and finesse, my portfolio is powered by React JS. Elevating its aesthetic appeal, I've integrated Material UI to infuse sleek design elements. Additionally, I've incorporated the mesmerizing effects of ParticlesTS for an interactive touch. To inject personality and dynamism, react-Typed brings engaging animated text, communicating my skills and experiences seamlessly. Together, these packages synergize to showcase my work and offer an unforgettable user experience.`,
      image: projectImage2,
      liveLink: 'https://akeemmckenzie.github.io/',
      disabled: false,
      tags: ["react", "html", "css"]
    },
    {
      title: 'Angular Portfolio',
      description: `rafted with Angular and enhanced by Redux, my portfolio stands as a testament to seamless functionality and dynamic user interaction. Integrating Angular's robust framework, I've curated a platform that embodies both sophistication and efficiency. The incorporation of Redux further bolsters its capabilities, ensuring smooth state management and enhancing overall performance. Together, these technologies create a harmonious synergy, empowering my portfolio to showcase my work with unparalleled precision and flair.`,
      image: projectImage3,
      liveLink: 'https://akeemmckenzie.github.io/angular-portfolio',
      disabled: false,
      tags: ["angular", "redux"]
    },
    {
      title: 'Django Web App',
      description: `Arithmetic Calculator is a web platform providing a simple calculator functionality with a REST API. Users can perform addition, subtraction, multiplication, division, square root operations, and random string generation. Each functionality has a separate cost per request. The user's balance is updated with each request, and requests are denied if the balance isn't sufficient. This repository includes both the backend (built with Django and Django Rest Framework) and the frontend (built with React and Material-UI).`,
      image: projectImage4,
      liveLink: 'https://github.com/akeemmckenzie/arithmetic-calculator',
      disabled: false,
      tags: ["python"]
    },
    {
      title: 'UNF Java Projects',
      description: `Throughout my tenure at UNF, I undertook a multitude of projects leveraging Java, fostering and refining my proficiency in software development. These experiences have not only honed my skills but also enriched my expertise in creating robust and innovative solutions.`,
      image: projectImage5,
      liveLink: 'https://example.com/project5',
      disabled: true,
      tags: ["java", "c", "c++"]
    },
    {
      title: 'Location Based Dating App',
      description: `I've engineered a dynamic dating platform that seamlessly integrates Django and React Native, harnessing location-based features to facilitate genuine connections among users. This innovative platform empowers individuals to effortlessly match, like, and message nearby users, fostering meaningful interactions. Although not yet live, its robust functionality is poised for future deployment, promising an exceptional user experience.`,
      image: projectImage6,
      liveLink: 'https://example.com/project6',
      disabled: true,
      tags: ["python", "react-native"]
    },
  ];

  return (
    <Box sx={{ padding: '10px', marginTop: '50px', overflowY: "auto", maxHeight: "200vh" }}>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  height="150" // Adjust the height to fit the images better
                  width="100%" // Adjust the width to fit the images better
                  sx={{ objectFit: 'contain' }} // Ensure the image fits within the card
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Accordion>
                    <AccordionSummary expandIcon={<FaArrowDown />}>
                      <Typography variant="subtitle1">Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 , mr: 1}}
                    disabled={project.disabled}
                  >
                    See Live
                  </Button>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex} label={tag} sx={{ mr: 1, mt: 1 }} />
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
