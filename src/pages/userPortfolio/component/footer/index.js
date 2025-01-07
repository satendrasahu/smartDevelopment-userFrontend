import { Grid } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { FooterStyle, ProfileBox, StyledImage } from "./style.js";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../../assets/css/common.styles.js";
import { useState } from "react";
import DesignedCard13 from "../../../../components/cards/designCards/designedCard13/DesignedCard13.jsx";
import { colors } from "../../../../theme/colors.js";
const Footer = (props) => {
  const { renderTabList, handleTabClick } = props;

  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  const socialData = [{
    name :"facebook",
    src:"",
    icon :<svg
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="svg"
  >
    <path
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    ></path>
  </svg>
  },

  {
    name :"facebook",
    icon :<svg
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="svg"
  >
    <path
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    ></path>
  </svg>
  },
  {
    name :"facebook",
    icon :<svg
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="svg"
  >
    <path
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    ></path>
  </svg>
  }
]
  return (
    <FooterStyle>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
          <ProfileBox>
            <StyledImage
              src={
                imageError
                  ? ""
                  : "https://as2.ftcdn.net/v2/jpg/09/33/74/03/1000_F_933740387_6v4QtD2VWJuOzSMNRDVmlnD9uEfwwd5h.webp"
              }
              alt="Satendra Sahu"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            <PrimaryText props={{ fontSize: "0.875rem" }}>
              Satendra Sahu
            </PrimaryText>
          </ProfileBox>
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={3}>
          <PrimaryText
            props={{
              fontSize: "1.125rem",
              fontWeight: "900",
              marginBottom: "1rem",
            }}
          >
            {t("letsConnect")}
          </PrimaryText>
          <DesignedCard13 socialData={socialData}/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <PrimaryText
            props={{
              fontSize: "1.125rem",
              fontWeight: "900",
              marginBottom: "1rem",
            }}
          >
            {t("allCategories")}
          </PrimaryText>
          {renderTabList?.map((data) => (
            <PrimaryText
              key={uuidv4()}
              onClick={() => handleTabClick(data?.id)}
              props={{
                fontSize: "1rem",
                cursor: "pointer",
                margin: "0.125rem auto",
                "&:hover": {
                  color: colors.extra.newColor3,
                },
              }}
            >
              {data?.name}
            </PrimaryText>
          ))}
        </Grid>
      </Grid>
      <CenteredItemBox props={{ flexDirection: "column", marginTop: "2rem" }}>
        <PrimaryText props={{ fontSize: "0.875rem" }}>
          {t("allRightsReserved")}
        </PrimaryText>
        <PrimaryText props={{ fontSize: "0.875rem" }}>
          {`${window.location.protocol}//${window.location.hostname}`} &nbsp;
          {t("isOperatedBy")}
        </PrimaryText>
      </CenteredItemBox>
    </FooterStyle>
  );
};

Footer.defaultProps = {
  renderTabList: [],
  handleTabClick: () => {},
};
export default Footer;
