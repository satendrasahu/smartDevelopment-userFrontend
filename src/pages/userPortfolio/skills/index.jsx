import React from "react";
import { StyledSkillsContainer } from "./style";
import CircleCards from "../../../components/cards/designCards/firstDesign/CircleCards";
import CirclesWithWaves from "../../../components/cards/designCards/secondDesing/CirclesWithWaves";
import StandingCards from "../../../components/cards/designCards/thirdDesign/StandingCards";
import FourthDesign from "../../../components/cards/designCards/fourthDesign/FourthDesign";
import FifthDesignedCard from "../../../components/cards/designCards/fifthDesign/FifthDesignedCard";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../assets/css/common.styles";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import NeonText from "../../../components/ui_kit/Headings/TextAnimationTwo/AnimationTwo";
import { colors } from "../../../theme/colors";
const fronEndSkills = [
  {
    color: colors.extra.drakColor,
    icon: "fa-react",
    title: "React",
    description: "Redux (Toolkit, Thunk, Saga, Persist, RTK)",
    accentColor: colors.extra.newColor1,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-code",
    title: "Next.js",
    description: "Server-Side Rendering, Static Generation",
    accentColor: colors.extra.newColor2,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-layer-group",
    title: "Material UI",
    description: "MUI Core and MUI X",
    accentColor: colors.extra.newColor3,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-bootstrap",
    title: "Bootstrap",
    description: "CSS Framework with Grid and Utilities",
    accentColor: colors.extra.newColor4,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-wind",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    accentColor: colors.extra.newColor5,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-css3", //"fa-paint-brush",
    title: "Styled Compo nents",
    accentColor: colors.extra.newColor6,
  },

  {
    color: colors.extra.drakColor,
    icon: "fa-html5", //"fa-paint-brush",
    title: "Html",
    accentColor: colors.extra.newColor11,
  },

  {
    color: colors.extra.drakColor,
    icon: "fa-css3", //"fa-paint-brush",
    title: "Css",
    accentColor: colors.extra.newColor12,
  },
];

const backEndSkills = [
  {
    color: colors.extra.drakColor,
    icon: "fa-react",
    title: "Node.js",
    accentColor: colors.extra.newColor7,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-code",
    title: "Express.js",
    accentColor: colors.extra.newColor8,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-wind",
    title: "Restful Api's",
    accentColor: colors.extra.newColor5,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-js",
    title: "Javascript",
    accentColor: colors.extra.newColor9,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-bootstrap",
    title: "TypeScript",
    accentColor: colors.extra.newColor4,
  },
  {
    color: colors.extra.drakColor,
    icon: "fa-bootstrap",
    title: "Graphql",
    accentColor: colors.extra.newColor1,
  },
];

const databaseSkills = [
  {
    color: colors.extra.darkColor,
    icon: "fa-database", // Relevant icon for MongoDB
    title: "MongoDB",
    description:
      "A NoSQL database known for its flexibility and scalability, ideal for handling large volumes of unstructured data.",
    accentColor: colors.extra.newColor10,
  },
  {
    color: colors.extra.darkColor,
    icon: "fa-cogs", // Icon representing operations (relevant for Mongoose)
    title: "Mongoose",
    description:
      "An ODM library for MongoDB, simplifying data modeling and interactions with schemas and queries.",
    accentColor: colors.extra.newColor11,
  },
  {
    color: colors.extra.darkColor,
    icon: "fa-database", // General database icon for MySQL
    title: "MySQL",
    description:
      "A popular open-source relational database management system, known for its reliability and performance.",
    accentColor: colors.extra.newColor12,
  },
  {
    color: colors.extra.darkColor,
    icon: "fa-database", // General database icon for PostgreSQL
    title: "PostgreSQL",
    description:
      "A powerful, open-source relational database with advanced features like support for JSON and extensibility.",
    accentColor: colors.extra.newColor13,
  },
  {
    color: colors.extra.darkColor,
    icon: "fa-layer-group", // Icon representing data abstraction layers
    title: "Sequelize",
    description:
      "A modern TypeScript and Node.js ORM for SQL-based databases, simplifying queries and database interactions.",
    accentColor: colors.extra.newColor14,
  },
];

const collaborationSkills = [
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-columns", // Icon for board-style management
    title: "Trello",
    description: "Visual project management with boards, lists, and cards.",
    accentColor: colors.extra.newColor1,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-chart-bar", // Icon for analytics and tracking
    title: "Jira",
    description: "Agile project management and bug tracking for teams.",
    accentColor: colors.extra.newColor10,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-code-branch", // Icon for development workflows
    title: "Azure DevOps",
    description: "CI/CD pipelines and agile planning for development teams.",
    accentColor: colors.extra.newColor11,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-calendar-alt", // Icon for scheduling and planning
    title: "Monday.com",
    description: "Flexible work and project management platform.",
    accentColor: colors.extra.newColor7,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-tasks", // Icon for task management
    title: "Asana",
    description: "Task and workflow management for teams.",
    accentColor: colors.extra.newColor8,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-comment-alt", // Icon for chat and messaging
    title: "Slack",
    description: "Real-time messaging and collaboration for teams.",
    accentColor: colors.extra.newColor13,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-video", // Icon for video conferencing
    title: "Zoom",
    description: "High-quality video meetings for remote collaboration.",
    accentColor: colors.extra.newColor2,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-video", // Icon for Google Meet
    title: "Google Meet",
    description: "Secure video meetings for team communication.",
    accentColor: colors.extra.newColor15,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-phone", // Icon for voice and video calls
    title: "Skype",
    description: "Voice and video calling platform for teams.",
    accentColor: colors.extra.newColor16,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-comments", // Icon for chat-based collaboration
    title: "Google Chat",
    description: "Team messaging and collaboration tool by Google.",
    accentColor: colors.extra.newColor5,
  },
];

const testingSkills = [
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-cogs", // Icon for gears/tools
    title: "Unit & Integration Testing",
    description:
      "Ensures individual units and their integrations function as expected.",
    accentColor: colors.extra.newColor1,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-vial", // Icon for testing
    title: "React Testing Library",
    description:
      "Focuses on testing React components from the user’s perspective.",
    accentColor: colors.extra.newColor10,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-check-circle", // Icon for verification
    title: "Jest",
    description:
      "Delivers a complete testing solution with a focus on simplicity and performance.",
    accentColor: colors.extra.newColor11,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-code", // Icon for code-related tools
    title: "Enzyme",
    description:
      "A testing utility for React that makes it easier to assert, manipulate, and traverse components.",
    accentColor: colors.extra.newColor7,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-coffee", // Icon for Mocha (coffee cup analogy)
    title: "Mocha",
    description:
      "Feature-rich JavaScript testing framework running on Node.js.",
    accentColor: colors.extra.newColor8,
  },
  {
    color: colors.extra.whiteColor,
    icon: "fas fa-balance-scale", // Icon for comparison/assertion
    title: "Chai",
    description:
      "Assertion library that pairs well with Mocha for readable, expressive tests.",
    accentColor: colors.extra.newColor13,
  },
];

const itemsData = [
  {
    color: "#0D6EFD",
    icon: "fa-brands fa-codepen",
    title: "Codepen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?",
    accentColor: "#0D6EFD",
  },
  {
    color: "#6710F5",
    icon: "fa-brands fa-html5",
    title: "HTML 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    accentColor: "#6710F5",
  },
  {
    color: "#6F42C1",
    icon: "fa-brands fa-css3",
    title: "CSS 3",
    description: "Lorem ipsum dolor sit.",
    accentColor: "#6F42C1",
  },
  {
    color: "#D63384",
    icon: "fa-brands fa-js",
    title: "Javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.",
    accentColor: "#D63384",
  },
  {
    color: "#DC3545",
    icon: "fa-brands fa-github",
    title: "Github",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    accentColor: "#DC3545",
  },
];

const SkillsData = () => {
  const { t } = useTranslation();
  return (
    <StyledSkillsContainer>
      <NeonText title={t("skills")} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("frontEnd")}
        </PrimaryText>
        <CircleCards listData={fronEndSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("backEnd")}
        </PrimaryText>
        <CirclesWithWaves listData={backEndSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("dataBase")}
        </PrimaryText>
        <StandingCards listData={databaseSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("collaboration")}
        </PrimaryText>
        <FourthDesign listData={collaborationSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("testing")}
        </PrimaryText>
        <FifthDesignedCard listData={testingSkills} />
      </Box>
    </StyledSkillsContainer>
  );
};

export default SkillsData;
