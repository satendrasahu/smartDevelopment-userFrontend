import AboutMe from "./aboutMe";
import Achievements from "./achievements";
import Category from "./category";
import Contact from "./contacts";
import Domains from "./domains";
import Education from "./Education";
import Projects from "./projects";
import Responsibilities from "./responsibilities";
import ShortIntro from "./shortInro";
import Skills from "./skills";
import WorkExperience from "./workExperience";

 export const tabList =(handleTabClick)=> [
//     { id: "shortIntro", name: "Short Intro", component: <ShortIntro handleTabClick={handleTabClick} redirectIdTab="contact"/> },
//     { id: "aboutMe", name: "About Me", component: <AboutMe /> },
    { id: "skills", name: "Skills", component: <Skills /> },
    // { id: "education", name: "Education", component: <Education /> },
    // // { id: "workExperience", name: "Work Experience", component: <WorkExperience /> },
    // { id: "contact", name: "Contact", component: <Contact /> },
    // { id: "responsibilities", name: "Responsibilities", component: <Responsibilities /> },
    // { id: "achievements", name: "Achievements", component: <Achievements /> },
    // { id: "category", name: "Category", component: <Category /> },
    // { id: "domains", name: "Domains", component: <Domains /> },
    // { id: "projects", name: "Projects", component: <Projects /> },
  ];
