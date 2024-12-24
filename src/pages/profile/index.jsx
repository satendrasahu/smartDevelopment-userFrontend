import React, { useEffect, useMemo, useState } from "react";
import { Tabs, Tab, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import {
  MainWrap,
  PrimaryText,
  SecondaryText,
} from "../../assets/css/common.styles";
import { ROUTE_PATHS } from "../../routes/routesPath";
import { ProfileContainer, useProfile } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { tabList } from "./constant";
import PersonalInformation from "./personalInformation/personalInformation";
import AirMovingHeading from "../../components/ui_kit/Headings/AirMovingHeading";
import ResumeMaker from "./resumeMaker";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  // borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minWidth: 120,
  marginRight: theme.spacing(1),
  color: theme.palette.primary.main,
  "&.Mui-selected": {
    color: `${theme.colors.extra.darkColor} !important`,
    backgroundColor: `${theme.colors.extra.highLightColor} !important`,
  },
  "&:hover": {
    backgroundColor: "red",
    color: theme.palette.common.white,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <SecondaryText>{children}</SecondaryText>
        </Box>
      )}
    </div>
  );
};

const Index = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("transactionActiveTab", newValue);
  };

  const changePath = (pathname, activeTab) => {
    navigate(
      location.pathname.split("/")[1] === ROUTE_PATHS.BALANCE
        ? `../${ROUTE_PATHS.BALANCE}${pathname}`
        : pathname
    );
  };

  useEffect(() => {
    const activeTab = parseInt(
      localStorage.getItem("transactionActiveTab"),
      10
    );
    if (!isNaN(activeTab)) {
      setValue(activeTab);
    }

    return () => {
      localStorage.removeItem("transactionActiveTab");
    };
  }, []);

  return (
    <>
      <MainLayout header footer sidebar>
        <MainWrap>
          <ProfileContainer>
            {/* <Box
              sx={{
                width: "100%",
                height: "168px",
                overflow: "auto",
                display: "flex",
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
                border: "1px solid red",
              }}
            >
              <AirMovingHeading text={t("myProfile")} />
            </Box> */}
            <StyledTabs
              value={value}
              onChange={handleChange}
              indicatorColor="none"
              textColor="primary"
              className="tabs-headings"
              sx={{ alignItems: "flex-start" }}
            >
              {tabList?.map((tab, ind) => {
                return (
                  <StyledTab
                    label={
                      <PrimaryText
                        props={{
                          fontWeight: 500,
                          fontSize: "1rem",
                          color: "inherit",
                        }}
                      >
                        {t(tab?.title)}
                      </PrimaryText>
                    }
                    onClick={() => changePath(tab.path, ind)}
                  />
                );
              })}
            </StyledTabs>
            <TabPanel p={0} value={value} index={0}>
              <PersonalInformation />
            </TabPanel>
            <TabPanel value={value} index={1}>
             <ResumeMaker/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3>h3</h3>
              {/* <CasinoTransactions /> */}
            </TabPanel>
          </ProfileContainer>
        </MainWrap>
      </MainLayout>
    </>
  );
};

export default Index;
