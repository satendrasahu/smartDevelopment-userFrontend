import React from "react";
import { Box, Typography, Button, Grid, Chip } from "@mui/material";
import { fontSize, fontWeight, styled, textAlign } from "@mui/system";
import {
  ProjectCard,
  ProjectImage,
  ProjectDetails,
  ProjectTitle,
  ProjectDescription,
  ProjectDuration,
  ProjectButton,
  TagContainer,
  DomainBox,
  TitleBox,
  HeaderBox,
  BodyBox,
  StyledWorkProjectContainer,
} from "./style";

import {
  CenteredItemBox,
  PrimaryText,
} from "../../../../assets/css/common.styles";
import { colors } from "../../../../theme/colors";
import { useTranslation } from "react-i18next";
 
const projectData = [
  {
    domain: "I - GAMING  ",
    name: "Comprehensive Online Gaming Solutions",
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
    domain: "Digital Financial Services",
    name: "Digital Financial Services",
    duration: " January 2023 -  November-23",
    description:
      "Nagad is a Digital Financial Service provided by the Bangladesh Post Office, delivering secure and versatile services for customers in Bangladesh. Acting as a third-party developer for Paytm, my role focuses on developing and implementing React.js-based applications tailored to client specifications.",
    responsibilities: [
      "User Interface Design: Utilizing Material UI to create a responsive and visually engaging interface. This involved closely following the guidelines in XD (Adobe Experience Design) and FRS (Functional Requirement Specification) documents to ensure accurate UI design.",
      "Functionality Implementation: Breaking down functionality requirements into smaller tasks and using React components and hooks to create reusable and modular code. Managed state efficiently using Redux Toolkit to optimize performance across the application.",
      "API Integration: Using the Axios library to handle HTTP requests for API integration with strict adherence to the API documentation provided by Nagad or Paytm.covering endpoints, request/response formats, and authentication requirements.",
    ],
    liveLink: "https://fooddelivery.com",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Material UI", "Redux Toolkit", "React Hook Form", "Axios"],
  },

  {
    domain: "I - GAMING  ",
    name: "Comprehensive Online Gaming Solutions",
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
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <StyledWorkProjectContainer>
      <CenteredItemBox>
        <PrimaryText
          props={{
            color: colors.extra.darkColor,
            fontSize: "2rem",
            fontWeight: "900",
          }}
        >
          {t("myProjects")}
        </PrimaryText>
      </CenteredItemBox>
      <Grid container justifyContent="left" spacing={3}>
        {projectData.map((project, index) => (
          <Grid item xs={12} md={6} xl={4} key={index}>
            <ProjectCard>
              {/* <ProjectImage src={project.image} alt={project.name} /> */}
              <HeaderBox>
                <DomainBox>
                  <PrimaryText
                    props={{
                      color: colors.extra.newColor1,
                      fontSize: "1.125rem",
                      fontWeight: "900",
                    }}
                  >
                    {project?.domain}
                  </PrimaryText>
                </DomainBox>
                <TitleBox>
                  <PrimaryText
                    props={{
                      color: colors.extra.newColor10,
                      fontSize: "1.5rem",
                      fontWeight: "800",
                    }}
                  >
                    {project?.name}
                  </PrimaryText>
                  <PrimaryText
                    props={{
                      color: colors.extra.newColor18,
                      fontSize: "0.875rem",
                      // fontWeight:"800",
                    }}
                  >
                    {project?.duration}
                  </PrimaryText>
                </TitleBox>
              </HeaderBox>
              <BodyBox>
                <PrimaryText
                  props={{
                    color: colors.extra.newColor9,
                    fontSize: "1rem",
                    textAlign: "left",
                    // fontWeight:"800",
                    marginTop: "1.5rem",
                  }}
                >
                  {project.description}
                </PrimaryText>
                <TagContainer>
                  {project.tags.map((tag, idx) => (
                    <Chip
                      label={tag}
                      key={idx}
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
                </TagContainer>

                <Box component="ul" sx={{ marginTop: "0.25rem" }}>
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx}>
                      <PrimaryText
                        props={{
                          color: colors.extra.newColor9,
                          fontSize: "0.875rem",
                          textAlign: "left",
                        }}
                      >
                        {item}
                      </PrimaryText>
                    </li>
                  ))}
                </Box>
              </BodyBox>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </StyledWorkProjectContainer>
  );
};

export default Projects;
