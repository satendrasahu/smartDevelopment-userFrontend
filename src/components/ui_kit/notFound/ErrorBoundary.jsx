import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import MainLayout from "../mainLayout/MainLayout";
import { MainWrap, PrimaryButton } from "../../../assets/css/common.styles";
import { Box, Typography, styled } from "@mui/material";
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
  "& .textOoops": {
    fontSize: "5rem",
    color: theme.colors.primary.textColor,
  },
  "& .textSubHeading": {
    marginTop: theme.spacing(1.3),
    marginBottom: theme.spacing(1.3),
    fontSize: theme.spacing(1.3),
    color: theme.colors.secondary.textColor,
  },
}));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  handleReloadPage = () => {
    window.location.reload();
  };

  render() {
    const { errorBoundaryMessage } = this.props;
    if (this.state.hasError) {
      return (
        <MainLayout header footer>
          <MainWrap>
            <StyledContainer>
              <Typography className="textOoops">
                {errorBoundaryMessage?.title}
              </Typography>
              <Typography className="textSubHeading">
                {errorBoundaryMessage?.subtitle}
              </Typography>

              <PrimaryButton
                variant="contained"
                color="primary"
                onClick={this.handleReloadPage}
              >
                {errorBoundaryMessage?.buttonTitle}
              </PrimaryButton>
            </StyledContainer>
          </MainWrap>
        </MainLayout>
      );
    }

    return this.props.children;
  }
}

export default withTranslation("home")(ErrorBoundary);
