import React from "react";
import { useTranslation } from "react-i18next";
import ShortIntro from "../screens/shortInro";
import AboutMe from "../screens/aboutMe";
import WorkExperience from "../screens/workExperience";
import Skills from "../screens/skills";
import Education from "../screens/education";
import Contact from "../screens/contacts";
import Responsibilities from "../screens/responsibilities";
import Achievements from "../screens/achievements";
import Category from "../screens/category";
import Domains from "../screens/domains";
import Projects from "../screens/projects";

const useConstantHook = () => {
  const { t } = useTranslation();
  const tabList = (handleTabClick) => [
    {
      id: "shortIntro",
      name: t("shortIntro"),
      component: (
        <ShortIntro handleTabClick={handleTabClick} redirectIdTab="contact" />
      ),
    },
    { id: "aboutMe", name: t("aboutMe"), component: <AboutMe /> },
    {
      id: "workExperience",
      name: t("workExperience"),
      component: <WorkExperience />,
    },
    { id: "skills", name: t("skills"), component: <Skills /> },
    { id: "education", name: t("education"), component: <Education /> },
    { id: "contact", name: t("contact"), component: <Contact /> },
    {
      id: "responsibilities",
      name: t("responsibilities"),
      component: <Responsibilities />,
    },
    {
      id: "achievements",
      name: t("achievements"),
      component: <Achievements />,
    },
    { id: "category", name: t("category"), component: <Category /> },
    { id: "domains", name: t("domains"), component: <Domains /> },
    { id: "projects", name: t("projects"), component: <Projects /> },
  ];

  return { tabList };
};

export default useConstantHook;
