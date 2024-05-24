import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/routesPath";
import MainLayout from "../mainLayout/MainLayout";
import { MainWrap, PrimaryButton } from "../../../assets/css/common.styles";

const StyledContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: `calc(100vw-230px)`,
  top: "0",
  left: "0",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop : theme.spacing(15),
  "& .textComingSoon": {
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

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(ROUTE_PATHS.home);
  };

  return (
    <MainLayout header footer>
      <MainWrap>
        <StyledContainer>
          <Typography className="textComingSoon">{t("comingSoon")}</Typography>

          <Typography className="textSubHeading">
            {t("comingNewUpdate")}
          </Typography>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={handleRedirect}
          >
            {t("goToHome")}
          </PrimaryButton>
        </StyledContainer>
      </MainWrap>
    </MainLayout>
  );
};

export default PageNotFound;
