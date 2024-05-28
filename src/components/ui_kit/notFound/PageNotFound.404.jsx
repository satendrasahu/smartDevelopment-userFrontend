import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/routesPath";
import MainLayout from "../mainLayout/MainLayout";
import { CenteredItemBox, MainWrap, PrimaryButton } from "../../../assets/css/common.styles";
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

  "& .textOoops": {
    fontSize: "5rem",
    color: theme.colors.primary.textColor,
  },
  "& .text404": {
    fontSize: "20rem",
    color: theme.colors.primary.textColor,
    [theme.breakpoints.down("md")]: {
      fontSize: "15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10rem",
    },
  },
  "& .textSubHeading": {
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(1.3),
    marginBottom: theme.spacing(1.3),
    fontSize: theme.spacing(1),
    color: theme.colors.secondary.textColor,
  },
}));

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [redirectTime, setRedirectTime] = useState(5);
  const theme = useTheme()

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setRedirectTime((prevTime) => prevTime - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate(ROUTE_PATHS.home);
    }, redirectTime * 1000);

    return () => {
      clearInterval(redirectTimer);
      clearTimeout(redirectTimeout);
    };
  }, [redirectTime,navigate]);

  const handleRedirect = () => {
    navigate(ROUTE_PATHS.home);
  };

  return (
    <MainLayout header footer>
      <MainWrap>
        <StyledContainer>
          <Typography className="textOoops">{t("ooops")}</Typography>
          <Typography className="text404">404</Typography>
          <Typography variant="h5" color="#fff" paragraph sx={{ mt: 3 }}>
            {t("pageNotFound")}
          </Typography>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={handleRedirect}
          >
            {t("goToHome")}
          </PrimaryButton>
          <CenteredItemBox props={{margin :theme.spacing(1)}}>
            <MyCircularProgress
              value={(redirectTime / 5) * 100}
              variant="determinate"
            />

            <Typography className="textSubHeading">
              {t("redirectingMessage", { redirectTime: redirectTime })}
            </Typography>
          </CenteredItemBox>
        </StyledContainer>
      </MainWrap>
    </MainLayout>
  );
};

export default PageNotFound;
