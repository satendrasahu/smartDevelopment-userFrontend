import { useTranslation } from "react-i18next";
import { colors } from "../../../../../theme/colors";

import DesignedCard1 from "../../../../../components/cards/designCards/designedCard1/DesignedCard1";
import DesignedCard2 from "../../../../../components/cards/designCards/designedCard2/DesignedCard2";
import DesignedCard3 from "../../../../../components/cards/designCards/designedCard3/DesignedCard3";
import DesignedCard4 from "../../../../../components/cards/designCards/designedCard4/DesignedCard4";
import DesignedCard5 from "../../../../../components/cards/designCards/designedCard5/DesignedCard5";
import DesignedCard6 from "../../../../../components/cards/designCards/designedCard6/DesignedCard6";
import DesignedCard7 from "../../../../../components/cards/designCards/designedCard7/DesignedCard7";
import DesignedCard8 from "../../../../../components/cards/designCards/designedCard8/DesignedCard8";
import useAllImportedIcons from "../../../../../hooks/useAllImportedIcons";

const useSkillsHook = () => {
  const { t } = useTranslation();
  const { fontAwesomIcons } = useAllImportedIcons();
  const fronEndSkills = [
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.react(),
      title: "React",
      description: "Redux (Toolkit, Thunk, Saga, Persist, RTK)",
      accentColor: colors.extra.newColor1,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.next(),
      title: "Next.js",
      description: "Server-Side Rendering, Static Generation",
      accentColor: colors.extra.newColor2,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.mui(),
      title: "Material UI",
      description: "MUI Core and MUI X",
      accentColor: colors.extra.newColor3,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.bootStrap(),
      title: "Bootstrap",
      description: "CSS Framework with Grid and Utilities",
      accentColor: colors.extra.newColor4,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.tailwindCss(),
      title: "Tailwind CSS",
      description: "Utility-first CSS framework",
      accentColor: colors.extra.newColor5,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.styledComponents(),
      title: "Styled Compo-nents",
      accentColor: colors.extra.newColor6,
    },

    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.html(),
      title: "Html",
      description:
        "The backbone of web pages, defining structure and content using elements",
      accentColor: colors.extra.newColor11,
    },

    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.css(),
      title: "Css",
      description: "A styling language used to design and layout web pages.",
      accentColor: colors.extra.newColor12,
    },
  ];

  const backEndSkills = [
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.node({ size: "xs" }),
      title: "Node.js",
      accentColor: colors.extra.newColor7,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.express({ size: "xs" }),
      title: "Express.js",
      accentColor: colors.extra.newColor8,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.restfulApis({ size: "xs" }),
      title: "Restful Api's",
      accentColor: colors.extra.newColor5,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.javaScript({ size: "xs" }),
      title: "Javascript",
      accentColor: colors.extra.newColor9,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.typeScript({ size: "xs" }),
      title: "TypeScript",
      accentColor: colors.extra.newColor4,
    },
    {
      color: colors.extra.drakColor,
      icon: fontAwesomIcons?.graphql({ size: "xs" }),
      title: "Graphql",
      accentColor: colors.extra.newColor1,
    },
  ];

  const databaseSkills = [
    {
      color: colors.extra.darkColor,
      icon: fontAwesomIcons?.mongoDb({ size: "xs" }), // Relevant icon for MongoDB
      title: "MongoDB",
      description:
        "A NoSQL database known for its flexibility and scalability, ideal for handling large volumes of unstructured data.",
      accentColor: colors.extra.newColor10,
    },
    {
      color: colors.extra.darkColor,
      icon: fontAwesomIcons?.mongoose({ size: "xs" }), // Icon representing operations (relevant for Mongoose)
      title: "Mongoose",
      description:
        "An ODM library for MongoDB, simplifying data modeling and interactions with schemas and queries.",
      accentColor: colors.extra.newColor11,
    },
    {
      color: colors.extra.darkColor,
      icon: fontAwesomIcons?.mysql({ size: "xs" }), // General database icon for MySQL
      title: "MySQL",
      description:
        "A popular open-source relational database management system, known for its reliability and performance.",
      accentColor: colors.extra.newColor12,
    },
    {
      color: colors.extra.darkColor,
      icon: fontAwesomIcons?.postGreySql({ size: "xs" }), // General database icon for PostgreSQL
      title: "PostgreSQL",
      description:
        "A powerful, open-source relational database with advanced features like support for JSON and extensibility.",
      accentColor: colors.extra.newColor13,
    },
    {
      color: colors.extra.darkColor,
      icon: fontAwesomIcons?.sequelise({ size: "xs" }), // Icon representing data abstraction layers
      title: "Sequelize",
      description:
        "A modern TypeScript and Node.js ORM for SQL-based databases, simplifying queries and database interactions.",
      accentColor: colors.extra.newColor14,
    },
  ];

  const collaborationSkills = [
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.trello(),
      title: "Trello",
      description: "Visual project management with boards, lists, and cards.",
      accentColor: colors.extra.newColor1,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.jira(),
      title: "Jira",
      description: "Agile project management and bug tracking for teams.",
      accentColor: colors.extra.newColor10,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.azureDevOps(),
      title: "Azure DevOps",
      description: "CI/CD pipelines and agile planning for development teams.",
      accentColor: colors.extra.newColor11,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.monday(),
      title: "Monday.com",
      description: "Flexible work and project management platform.",
      accentColor: colors.extra.newColor7,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.asana(),
      title: "Asana",
      description: "Task and workflow management for teams.",
      accentColor: colors.extra.newColor8,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.slack(),
      title: "Slack",
      description: "Real-time messaging and collaboration for teams.",
      accentColor: colors.extra.newColor13,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.zoom(),
      title: "Zoom",
      description: "High-quality video meetings for remote collaboration.",
      accentColor: colors.extra.newColor2,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.googleMeet(),
      title: "Google Meet",
      description: "Secure video meetings for team communication.",
      accentColor: colors.extra.newColor15,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.skype(),
      title: "Skype",
      description: "Voice and video calling platform for teams.",
      accentColor: colors.extra.newColor16,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.googleChat(),
      title: "Google Chat",
      description: "Team messaging and collaboration tool by Google.",
      accentColor: colors.extra.newColor5,
    },
  ];

  const testingSkills = [
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.unitIntegrationTesting({ size: "sm" }),
      title: "Unit & Integration Testing",
      description:
        "Ensures individual units and their integrations function as expected.",
      accentColor: colors.extra.newColor1,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.reactTestingLibrary({ size: "sm" }), // "fas fa-vial", // Icon for testing
      title: "React Testing Library",
      description:
        "Focuses on testing React components from the user’s perspective.",
      accentColor: colors.extra.newColor10,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.jest({ size: "sm" }), // Icon for verification
      title: "Jest",
      description:
        "Delivers a complete testing solution with a focus on simplicity and performance.",
      accentColor: colors.extra.newColor11,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.enzyme({ size: "sm" }), // Icon for code-related tools
      title: "Enzyme",
      description:
        "A testing utility for React that makes it easier to assert, manipulate, and traverse components.",
      accentColor: colors.extra.newColor7,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.mocha({ size: "sm" }), // Icon for Mocha (coffee cup analogy)
      title: "Mocha",
      description:
        "Feature-rich JavaScript testing framework running on Node.js.",
      accentColor: colors.extra.newColor8,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.chai({ size: "sm" }), // Icon for comparison/assertion
      title: "Chai",
      description:
        "Assertion library that pairs well with Mocha for readable, expressive tests.",
      accentColor: colors.extra.newColor13,
    },
  ];

  const versionControllSkills = [
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.git({ size: "sm" }),
      title: "Git",
      description:
        "Distributed version control system to track changes and collaborate effectively.",
      accentColor: colors.extra.newColor18,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.github({ size: "sm" }),
      title: "GitHub",
      description:
        "A platform for hosting and managing Git repositories with collaboration features.",
      accentColor: colors.extra.newColor1,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.gitlab({ size: "sm" }),
      title: "GitLab",
      description:
        "DevOps platform for version control, CI/CD, and comprehensive project management.",
      accentColor: colors.extra.newColor13,
    },
    {
      color: colors.extra.whiteColor,
      icon: fontAwesomIcons?.bitBucket({ size: "sm" }),
      title: "BitBucket",
      description:
        "Git repository hosting service with built-in CI/CD and team collaboration tools.",
      accentColor: colors.extra.newColor16,
    },
  ];

  const deploymentSkills = [
    {
      color: colors.extra.whiteColor,
      title: "Vercel",
      description:
        "A platform for frontend frameworks and static sites, designed to work with the JAMstack architecture.",
      accentColor: colors.extra.newColor18,
      icon: fontAwesomIcons?.vercel({ size: "sm" }),
    },
    {
      color: colors.extra.whiteColor,
      title: "Netlify",
      description:
        "Netlify is an all-in-one platform for automating modern web projects, including static site generation, serverless functions, and continuous deployment.",
      accentColor: colors.extra.newColor1,
      icon: fontAwesomIcons?.netlify({ size: "sm" }),
    },
    {
      color: colors.extra.whiteColor,
      title: "GitHub Pages",
      description:
        "GitHub Pages is a static site hosting service from GitHub that allows you to serve your project directly from your repository.",
      accentColor: colors.extra.newColor13,
      icon: fontAwesomIcons?.github({ size: "sm" }),
    },
    {
      color: colors.extra.whiteColor,
      title: "Firebase",
      description:
        "Firebase is a platform developed by Google for creating mobile and web applications, providing services like hosting, authentication, and real-time databases.",
      accentColor: colors.extra.newColor16,
      icon: fontAwesomIcons?.firebase({ size: "sm" }),
    },
    {
      color: colors.extra.whiteColor,
      title: "AWS",
      description:
        "Amazon Web Services (AWS) provides cloud computing services including storage, databases, networking, machine learning, and more.",
      accentColor: colors.extra.newColor16,
      icon: fontAwesomIcons?.AWS({ size: "sm" }),
    },
  ];

  const toolsSkills = [
    {
      icon: fontAwesomIcons?.VSCode({ size: "xl" }),
      title: "VSCode",
      accentColor: colors.extra.newColor1,
    },
    {
      icon: fontAwesomIcons?.figma(),
      title: "Figma",
      accentColor: colors.extra.newColor14,
    },
    {
      icon: fontAwesomIcons?.reactDevTools(),
      title: "React DevTools",
      accentColor: colors.extra.newColor15,
    },
    {
      icon: fontAwesomIcons?.pgAdmin(),
      title: "PgAdmin",
      accentColor: colors.extra.newColor2,
    },
  ];

  const skills = [
    { title: t("frontEnd"), data: fronEndSkills, Component: DesignedCard1 },
    { title: t("backEnd"), data: backEndSkills, Component: DesignedCard2 },
    { title: t("dataBase"), data: databaseSkills, Component: DesignedCard3 },
    {
      title: t("collaboration"),
      data: collaborationSkills,
      Component: DesignedCard4,
    },
    { title: t("testing"), data: testingSkills, Component: DesignedCard5 },
    {
      title: t("versionControl"),
      data: versionControllSkills,
      Component: DesignedCard6,
    },
    {
      title: t("deployMent"),
      data: deploymentSkills,
      Component: DesignedCard7,
    },
    { title: t("tools"), data: toolsSkills, Component: DesignedCard8 },
  ];

  return {
    t,
    skills,
  };
};

export default useSkillsHook;
