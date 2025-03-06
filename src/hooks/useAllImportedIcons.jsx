import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJs,
  faSquareJs,
  faTrello,
  faSlack,
  faJira,
  faGithub,
  faGitlab,
  faBitbucket,
  faAws,
  faVuejs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faCode,
  faPalette,
  faArrowRotateRight,
  faServer,
  faCloud,
  faProjectDiagram,
  faDatabase,
  faCogs,
  faCodeBranch,
  faCalendarAlt,
  faTasks,
  faVideo,
  faPhone,
  faComments,
  faVial,
  faCheckCircle,
  faBalanceScale,
  faFire,
  faPaintBrush,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
const iconsList = {
  react: faReact,
  next: faArrowRotateRight,
  node: faNodeJs,
  express: faServer,
  restfulApis: faCloud,
  javaScript: faJs,
  typeScript: faSquareJs,
  graphql: faProjectDiagram,
  mongoDb: faDatabase,
  mongoose: faProjectDiagram,
  mysql: faServer,
  postGreySql: faDatabase,
  sequelise: faCogs,
  mui: faCoffee,
  bootStrap: faBootstrap,
  tailwindCss: faPalette,
  styledComponents: faCode,
  html: faHtml5,
  css: faCss3Alt,
  trello: faTrello,
  jira: faJira,
  slack: faSlack,
  azureDevOps: faCodeBranch,
  monday: faCalendarAlt,
  asana: faTasks,
  zoom: faVideo,
  googleMeet: faVideo,
  skype: faPhone,
  googleChat: faComments,
  unitIntegrationTesting: faCogs,
  reactTestingLibrary: faVial,
  jest: faCheckCircle,
  enzyme: faCode,
  mocha: faBalanceScale,
  chai: faCoffee,
  git: faCodeBranch,
  github: faGithub,
  gitlab: faGitlab,
  bitBucket: faBitbucket,
  vercel: faCloud,
  netlify: faCodeBranch,
  firebase: faFire,
  AWS: faAws,
  VSCode: faVuejs,
  figma: faFigma,
  reactDevTools: faTools,
  faPaintBrush,
  pgAdmin: faDatabase,
};
const defaultProps = {
  size: "lg",
  style: {
    stroke: "inherit", // Adds an outline
    strokeWidth: "2rem", // Increases the thickness
  },
};

const useAllImportedIcons = () => {
  const fontAwesomIcons = new Proxy(iconsList, {
    get:
      (target, name) =>
      (props = {}) =>
        target[name] ? (
          <FontAwesomeIcon icon={target[name]} {...defaultProps} {...props} />
        ) : null,
  });

  return { fontAwesomIcons };
};

export default useAllImportedIcons;
