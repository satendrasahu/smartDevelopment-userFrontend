import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { DesktopFooterStyle } from "./Footer.styles";
const DesktopFooter = () => {
  const { t } = useTranslation();
  const footerLinks = [
    {
      title: t("socialMedia"),
      linksData: [
        {
          name: "facebook",
          src: "",
          onclick: () => {},
        },
      ],
    },
    {
      title: t("socialMedia"),
      linksData: [
        {
          name: "facebook",
          src: "",
          onclick: () => {},
        },
      ],
    },
    {
      title: t("socialMedia"),
      linksData: [
        {
          name: "facebook",
          src: "",
          onclick: () => {},
        },
      ],
    },

    {
      title: t("socialMedia"),
      linksData: [
        {
          name: "facebook",
          src: "",
          onclick: () => {},
        },
      ],
    },
  ];
  return (
    <DesktopFooterStyle>
      <Grid container spacing={2}>
        {footerLinks?.map((links) => {
          return (
            <Grid item xs={6} sm={6} md={4} lg={3} key={uuidv4()}>
              <Typography variant="h6">{links.title}</Typography>
              {links.linksData.map((data) => (
                <Typography key={uuidv4()}>{data.name}</Typography>
              ))}
            </Grid>
          );
        })}
      </Grid>
    </DesktopFooterStyle>
  );
};

export default DesktopFooter;
