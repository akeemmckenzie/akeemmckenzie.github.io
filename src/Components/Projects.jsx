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
      description: 'Created my Portfolio using React JS , packages included are material UI, particlesTS and react-Typed',
      image: projectImage2,
      liveLink: 'https://example.com/project2',
      disabled: false,
      tags: ["react", "html", "css"]
    },
    {
      title: 'Angular Portfolio',
      description: 'Created my Portfolio using Angualar',
      image: projectImage3,
      liveLink: 'https://akeemmckenzie.github.io/akeemmckenzie.github.io/projects',
      disabled: false,
      tags: ["angular", "redux"]
    },
    {
      title: 'Django Web App',
      description: 'I have developed multiple django based apps , both mobile and web',
      image: projectImage4,
      liveLink: 'https://example.com/project4',
      disabled: true,
      tags: ["python"]
    },
    {
      title: 'UNF Java Projects',
      description: 'Throughout my years at UNF, I completed numerous projects utilizing Java, honing my skills and expertise in software development.',
      image: projectImage5,
      liveLink: 'https://example.com/project5',
      disabled: true,
      tags: ["java", "c", "c++"]
    },
    {
      title: 'Location Based Dating App',
      description: `I've developed a dynamic dating platform integrating Django and React Native, leveraging location-based features for seamless user connections. Users can effortlessly match, like, and message nearby individuals, fostering meaningful connections. While not currently live, its robust functionality awaits future deployment.`,
      image: projectImage6,
      liveLink: 'https://example.com/project6',
      disabled: true,
      tags: ["python", "react-native"]
    },
  ];

  return (
    <Box sx={{ padding: '20px', marginTop: '50px', overflowY: "auto" }}>
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
