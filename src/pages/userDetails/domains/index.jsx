import React from "react";
import { DomainSectionContainer, DomainSectionTitle, DomainGridContainer, DomainCard, DomainIcon, DomainTitle, DomainDescription, DomainViewButton } from "./style";

// Data for the domains with descriptions and project links
const domainsData = [
  {
    id: 1,
    icon: '📱',
    title: 'Mobile Development',
    description: 'Worked on building cross-platform mobile apps with React Native and Flutter for seamless experiences.',
    projectLink: '/projects/mobile-development'
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Web Development',
    description: 'Expert in creating dynamic, responsive web applications using React, Node.js, and MongoDB.',
    projectLink: '/projects/web-development'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Passionate about creating intuitive and beautiful designs with a focus on user experience and accessibility.',
    projectLink: '/projects/ui-ux-design'
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'Backend Engineering',
    description: 'Experience in designing scalable backend solutions with Node.js, Express, and microservices.',
    projectLink: '/projects/backend-engineering'
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Specialized in enhancing security protocols and protecting data from potential threats and breaches.',
    projectLink: '/projects/cybersecurity'
  },
  {
    id: 6,
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'Experience working with AWS, Google Cloud, and Azure to develop scalable cloud-based solutions.',
    projectLink: '/projects/cloud-computing'
  },
];

const Domains = () => {
  return (
    <DomainSectionContainer>
      <DomainSectionTitle>Domains I Have Worked In</DomainSectionTitle>
      <DomainGridContainer>
        {domainsData.map((domain) => (
          <DomainCard key={domain.id}>
            <DomainIcon>{domain.icon}</DomainIcon>
            <DomainTitle variant="h5">{domain.title}</DomainTitle>
            <DomainDescription>{domain.description}</DomainDescription>
            <DomainViewButton href={domain.projectLink} target="_blank">
              View Projects
            </DomainViewButton>
          </DomainCard>
        ))}
      </DomainGridContainer>
    </DomainSectionContainer>
  );
};

export default Domains;
