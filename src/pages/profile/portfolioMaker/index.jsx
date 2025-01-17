import React from "react";
import ShortIntro from "./components/shortInro";
import AboutMe from "./components/aboutMe";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";
import Responsibilities from "./components/responsibilities";
import Achievements from "./components/achievements";
import Categories from "./components/categories";
import Domains from "./components/domains";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Skills from "./components/skills";

const PortFolioMaker = () => {
  return (
    <>
      <ShortIntro />
      <AboutMe />
      <WorkExperience/>
      <Education/> 
      <Responsibilities/>
      <Achievements/>
      <Categories/>
      <Skills/>
      <Contacts/>
      <Domains/>
      <Projects/>
    </>
  );
};

export default PortFolioMaker;
