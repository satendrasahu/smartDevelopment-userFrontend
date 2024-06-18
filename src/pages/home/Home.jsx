import React, { useCallback } from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import {
  CenteredItemBox,
  MainWrap,
  PrimaryText,
  SecondaryText,
} from "../../assets/css/common.styles";
import { appDetails } from "../../utils/common.Data";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import SecondaryCard from "../../components/cards/SecondaryCard";
import { homeData } from "./common";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const visitPage = (route) => {
    navigate(route);
  };
  const renderHomeData = useCallback(() => {
    return homeData(t, visitPage);
  }, [homeData]);

  return (
    <MainLayout header footer sidebar>
      <MainWrap>
        {/* <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ fontSize: theme.spacing(5) }}>
            {t("welcomeText", { name: t(appDetails.APP_TITLE) })}
          </PrimaryText>
        </CenteredItemBox>
        <SecondaryText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </SecondaryText>
        <CenteredItemBox
          props={{
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(5),
          }}
        >
          <PrimaryText props={{ fontSize: theme.spacing(2) }}>
            {t("visitOurPrograms")}
          </PrimaryText>
        </CenteredItemBox>
        <Grid container spacing={1} rowGap={5} ml={2}>
          {renderHomeData()?.map((cources, index) => (
            <Grid item xs={12} sm={12} md={6}  key={index}>
              <SecondaryCard details={cources} />
            </Grid>
          ))}
        </Grid> */}
      </MainWrap>
    </MainLayout>
  );
};

export default Home;
