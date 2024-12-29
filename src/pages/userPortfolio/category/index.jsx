import React from "react";
import { CardContainer, ContactItems, Card, DomainIcon, CardTitle, CardDescription, ViewProjectButton, SectionTitle } from "./style";

// Example Data for the domains with more cards and animations
const domainsData = [
  {
    id: 1,
    icon: '📱', // Replace with actual icons or FontAwesome icons
    title: 'Full Stack Development',
    description: 'I have worked extensively on mobile app development using React Native and Flutter.',
    projectLink: '/projects/mobile-development'
  },
  {
    id: 2,
    icon: '🌐', // Replace with actual icons or FontAwesome icons
    title: 'Web Development',
    description: 'Expert in full-stack development with React, Node.js, and MongoDB.',
    projectLink: '/projects/web-development'
  },
  {
    id: 3,
    icon: '🖥️', // Replace with actual icons or FontAwesome icons
    title: 'UI/UX Design',
    description: 'I specialize in designing intuitive and modern user interfaces, focusing on user experience and accessibility.',
    projectLink: '/projects/ui-ux-design'
  },
  {
    id: 4,
    icon: '⚙️', // Replace with actual icons or FontAwesome icons
    title: 'Backend Development',
    description: 'Proficient in building scalable backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL.',
    projectLink: '/projects/backend-development'
  },
  // {
  //   id: 5,
  //   icon: '📊', // Replace with actual icons or FontAwesome icons
  //   title: 'Data Science',
  //   description: 'Experience in data analysis, machine learning, and artificial intelligence using Python, TensorFlow, and Pandas.',
  //   projectLink: '/projects/data-science'
  // },
  {
    id: 6,
    icon: '🔒', // Replace with actual icons or FontAwesome icons
    title: 'Security & Encryption',
    description: 'Worked on implementing security protocols, encryption methods, and enhancing cybersecurity.',
    projectLink: '/projects/security-encryption'
  },
  {
    id: 7,
    icon: '🌍', // Replace with actual icons or FontAwesome icons
    title: 'Cloud Computing',
    description: 'Experience with cloud technologies like AWS, Azure, and Google Cloud for scalable deployments.',
    projectLink: '/projects/cloud-computing'
  }
];

const Category = () => {
  return (
    <CardContainer>
      <SectionTitle>Categories I Have Worked In</SectionTitle>
      <ContactItems>
        {domainsData.map((domain) => (
          <Card key={domain.id}>
            <DomainIcon>{domain.icon}</DomainIcon>
            <CardTitle variant="h5">{domain.title}</CardTitle>
            <CardDescription>{domain.description}</CardDescription>
            <ViewProjectButton href={domain.projectLink} target="_blank">
              View Related Projects
            </ViewProjectButton>
          </Card>
        ))}
      </ContactItems>
    </CardContainer>
  );
};

export default Category;
