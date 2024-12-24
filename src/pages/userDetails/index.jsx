import React, { useState, useRef } from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../assets/css/common.styles";
import AboutMe from "./aboutMe";
import ShortIntro from "./shortInro";
import Skills from "./skills";
import Education from "./Education";
import WorkExperience from "./workExperience";
import Contact from "./contacts";
import Responsibilities from "./responsibilities";
import Achievements from "./achievements";
import Domains from "./domains";
import Projects from "./projects";
import Category from "./category";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState(null);

  // Create references for each section to scroll to
  const sectionRefs = {
    shortIntro: useRef(),
    aboutMe: useRef(),
    skills: useRef(),
    education: useRef(),
    workExperience: useRef(),
    contact: useRef(),
    responsibilities: useRef(),
    achievements: useRef(),
    category: useRef(),
    domains: useRef(),
    projects: useRef(),
  };

  // Handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
    // Scroll to the clicked section smoothly
    if (sectionRefs[id] && sectionRefs[id].current) {
      sectionRefs[id].current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the start of the section
      });
    }
  };

  // Define all sections for the tab list
  const sections = [
    { id: "shortIntro", name: "Short Intro", component: <ShortIntro /> },
    { id: "aboutMe", name: "About Me", component: <AboutMe /> },
    { id: "skills", name: "Skills", component: <Skills /> },
    { id: "education", name: "Education", component: <Education /> },
    { id: "workExperience", name: "Work Experience", component: <WorkExperience /> },
    { id: "contact", name: "Contact", component: <Contact /> },
    { id: "responsibilities", name: "Responsibilities", component: <Responsibilities /> },
    { id: "achievements", name: "Achievements", component: <Achievements /> },
    { id: "category", name: "Category", component: <Category /> },
    { id: "domains", name: "Domains", component: <Domains /> },
    { id: "projects", name: "Projects", component: <Projects /> },
  ];

  return (
    <MainLayout >
      {/* Tab List */}
      <div style={{ position: "fixed", top: "0", left: "0", width: "100%", backgroundColor: "darkblue", zIndex: "999", padding: "1rem" }}>
        <ul style={{ display: "flex", justifyContent: "space-evenly", listStyle: "none", margin: 0, padding: 0 }}>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleTabClick(section.id)}
              style={{
                cursor: "pointer",
                padding: "0.5rem 1rem",
                color: "white",
                backgroundColor: activeTab === section.id ? "blue" : "transparent",
                transition: "background-color 0.3s",
              }}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Wrapper */}
      <MainWrap
        props={{
          margin: "7rem 0 !important", // Adjust the margin for the header to be visible
          padding: "auto 5rem",
        }}
      >
        {/* All Sections */}
        {sections.map((section) => (
          <div
            key={section.id}
            ref={sectionRefs[section.id]}
            style={{
              display: "block", // Always show components to allow normal scrolling
              paddingTop: "3rem",
              transition: "opacity 0.3s",
            }}
          >
            {section.component}
          </div>
        ))}
      </MainWrap>
    </MainLayout>
  );
};

export default UserDetails;
