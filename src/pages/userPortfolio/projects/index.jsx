import React from "react";
import { Box, Typography, Button, Grid, Chip } from "@mui/material";
import { styled } from "@mui/system";
import {
  ProjectCard,
  ProjectImage,
  ProjectDetails,
  ProjectTitle,
  ProjectDescription,
  ProjectDuration,
  ProjectButton,
  TagContainer,
} from "./style";

const projectData = [
  {
    domain: "I - GAMING  ",
    name: "I-Gaming Suite: Comprehensive Online Gaming Solutions",
    duration: "December 2023 -  Present",
    description: `The "I-Gaming" domain, also known as Internet Gaming or Online Gaming, encompasses all forms of gaming activities conducted over the internet. This includes online casinos, sports betting,Esports and Online Gaming Tournaments, Payment Gateways and Digital Wallets, Regulatory Compliance and Security  and other interactive digital gaming experiences. The industry involves platforms that allow users to gamble, participate in virtual games, or place bets using digital interfaces. 
In the I-Gaming domain, I have worked on numerous projects, including Deuces, Onlybets, and BetCred, Fin-Pics serving as a Lead Full Stack Developer. `,
    responsibilities: [
      "Conducting client meetings to discuss project plans, architecture, requirements, and timelines.",
      "Delivering projects using the MVP architecture for structured and efficient development.",
      "Distributing tasks among team members, including developers, designers, testers, and DevOps, according to project plans and requirements.",
      "Ensuring timely project completion by coordinating with cross-functional teams.",
      "Deploying projects across various server environments, including development, staging, and production.",
      "Monitoring project progress and adjusting plans to accommodate changes in scope or timelines.",
      "Implementing best practices for coding, version control, and documentation.",
    ],
    liveLink: "https://ecommerce.com",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Material UI", "Node.js", "Sequilize", "Postgrey Sql"],
  },
  {
    domain: "Mobile Development",
    name: "Digital Financial Services ",
    duration: " January 2023 -  November-23",
    description:
      "Nagad is a Digital Financial Service provided by the Bangladesh Post Office, delivering secure and versatile services for customers in Bangladesh. Acting as a third-party developer for Paytm, my role focuses on developing and implementing React.js-based applications tailored to client specifications.",
    responsibilities: [
      "User Interface Design: Utilizing Material UI to create a responsive and visually engaging interface. This involved closely following the guidelines in XD (Adobe Experience Design) and FRS (Functional Requirement Specification) documents to ensure accurate UI design.",
      "Functionality Implementation: Breaking down functionality requirements into smaller tasks and using React components and hooks to create reusable and modular code. Managed state efficiently using Redux Toolkit to optimize performance across the application.",
      "API Integration: Using the Axios library to handle HTTP requests for API integration with strict adherence to the API documentation provided by Nagad or Paytm.covering endpoints, request/response formats, and authentication requirements."
      
    ],
    liveLink: "https://fooddelivery.com",
    image: "https://via.placeholder.com/600x400",
    tags: ["React","Material UI", "Redux Toolkit", "React Hook Form", "Axios"],
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: "40px 20px", background: "#f0f4f8" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 700, marginBottom: 4 }}
      >
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
                    <Chip
                      label={tag}
                      key={idx}
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
                </TagContainer>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
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
              </ProjectDetails>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
