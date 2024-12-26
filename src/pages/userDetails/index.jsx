import React, { useState, useRef, useEffect, useMemo } from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../assets/css/common.styles";
import Header from "./component/header";
import { tabList } from "./constant";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState(null);
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
    return tabList;
  }, []);

  return (
    <MainLayout>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderTabList={renderTabList}
        tabListRef={tabListRef}
      />
      <MainWrap props={
        {
          margin: "4.5rem 0.5rem",
          [theme.breakpoints.down("sm")]: {
            margin: "4rem 0.5rem", 
          },
        }
      }>
        {renderTabList.map((section) => (
          <Box
            key={section.id}
            ref={sectionRefs[section.id]}
          >
            {section.component}
          </Box>
        ))}
      </MainWrap>
    </MainLayout>
  );
};

export default UserDetails;
