import React from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../assets/css/common.styles";
import Header from "./component/header";
import { Box } from "@mui/material";
import Footer from "./component/footer";
import usePortfolio from "./hooks/usePortfolio";

const UserPortfolio = () => {
  const {
    theme,
    activeTab,
    renderTabList,
    tabListRef,
    sectionRefs,
    t,
    setActiveTab,
    handleTabClick,
  } = usePortfolio();
  return (
    <MainLayout>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderTabList={renderTabList}
        tabListRef={tabListRef}
        handleTabClick={handleTabClick}
      />
      <MainWrap
        props={{
          margin: "4.5rem 0.5rem",
          [theme.breakpoints.down("sm")]: {
            margin: "4rem 0.5rem",
          },
        }}
      >
        {renderTabList.map((section) => (
          <Box key={section.id} ref={sectionRefs[section.id]}>
            {section.component}
          </Box>
        ))}
      </MainWrap>

      <Footer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderTabList={renderTabList}
        tabListRef={tabListRef}
        handleTabClick={handleTabClick}
      />
    </MainLayout>
  );
};

export default UserPortfolio;
