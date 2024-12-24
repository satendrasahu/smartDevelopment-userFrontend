import React from 'react';
import { Box, Typography, Button, Grid, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { ProjectCard, ProjectImage, ProjectDetails, ProjectTitle, ProjectDescription, ProjectDuration, ProjectButton, TagContainer } from './style';

const projectData = [
  {
    domain: 'Web Development',
    name: 'E-commerce Platform',
    duration: '6 months',
    description: 'Developed a fully responsive e-commerce platform with React, Node.js, and MongoDB.',
    responsibilities: [
      'Designed the front-end using React and Material-UI',
      'Developed a RESTful API with Node.js and Express',
      'Integrated secure payment systems',
      'Implemented real-time chat feature'
    ],
    liveLink: 'https://ecommerce.com',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    domain: 'Mobile Development',
    name: 'Food Delivery App',
    duration: '4 months',
    description: 'Built a cross-platform mobile app with React Native for a food delivery service.',
    responsibilities: [
      'Implemented mobile-friendly UI with React Native',
      'Integrated real-time order tracking',
      'Developed push notifications for real-time updates',
      'Implemented payment gateway integration'
    ],
    liveLink: 'https://fooddelivery.com',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React Native', 'Firebase', 'Push Notifications']
  }
];

const Projects = () => {
  return (
    <Box sx={{ padding: '40px 20px', background: '#f0f4f8' }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, marginBottom: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectDetails>
                <ProjectTitle variant="h5">{project.name}</ProjectTitle>
                <ProjectDuration>{project.duration}</ProjectDuration>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagContainer>
                  {project.tags.map((tag, idx) => (
                    <Chip label={tag} key={idx} sx={{ marginRight: 1, marginBottom: 1 }} />
                  ))}
                </TagContainer>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  Responsibilities:
                </Typography>
                <Box component="ul" sx={{ paddingLeft: 3, marginBottom: 2 }}>
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" color="text.primary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
                <ProjectButton href={project.liveLink} target="_blank">
                  View Live Project
                </ProjectButton>
              </ProjectDetails>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
