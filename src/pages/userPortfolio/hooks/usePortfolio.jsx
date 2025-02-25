import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import useConstantHook from "./useConstantHook";
import { useTranslation } from "react-i18next";

const usePortfolio = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { tabList } = useConstantHook();
  const { t } = useTranslation();
  const theme = useTheme();
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
  const tabListRef = useRef();

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (sectionRefs[id]?.current) {
      sectionRefs[id].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    renderTabList.forEach((section) => {
      const ref = sectionRefs[section.id]?.current;
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveTab(section.id);
        }
      }
    });
  };

  useEffect(() => {
    if (tabListRef.current && activeTab) {
      const activeTabElement = tabListRef.current.querySelector(
        `[data-id="${activeTab}"]`
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [activeTab]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderTabList = useMemo(() => {
    return tabList(handleTabClick);
  }, []);

  return {
    theme,
    activeTab,
    renderTabList,
    tabListRef,
    sectionRefs,
    t,
    setActiveTab,
    handleTabClick,
  };
};

export default usePortfolio;
