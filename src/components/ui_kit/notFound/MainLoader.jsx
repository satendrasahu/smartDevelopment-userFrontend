import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, styled } from "@mui/material";
import MainLayout from "../mainLayout/MainLayout";
import { CenteredItemBox, MainWrap } from "../../../assets/css/common.styles";
import { appDetails } from "../../../utils/common.Data";
import MyCircularProgress from "../../progressbar/MyCircularProgress";
import { useTheme } from "@emotion/react";

const StyledContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width :`calc(100vw-230px)`,
  top: "0",
  left: "0",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop : theme.spacing(15),
  "& .textWelcomeText": {
    fontSize: theme.spacing(5),
    color: theme.colors.primary.textColor,
  },
  "& .textSubHeading": {
    marginTop: theme.spacing(1.3),
    marginBottom: theme.spacing(1.3),
    fontSize: theme.spacing(1.3),
    color: theme.colors.secondary.textColor,
  },
}));

const MainLoader = () => {
  const { t } = useTranslation();
  const theme = useTheme()
  return (
    <MainLayout header footer>
      <MainWrap>
        <StyledContainer>
          <Typography className="textWelcomeText">
            {t("welcomeText", { name: appDetails.APP_TITLE })}
          </Typography>

          <CenteredItemBox props={{margin :theme.spacing(1)}}>
            <MyCircularProgress />
          </CenteredItemBox>
          <Typography className="textSubHeading">
            {t("redirectingMessage", { redirectTime: t("few") })}
          </Typography>
        </StyledContainer>
      </MainWrap>
    </MainLayout>
  );
};

export default MainLoader;
