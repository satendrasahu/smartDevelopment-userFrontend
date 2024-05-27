import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainLayout from "../../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../../assets/css/common.styles";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/routesPath";
import SecondaryCard from "../../../components/cards/SecondaryCard";
import { useTheme } from "@emotion/react";

export default function ResponsiveGrid() {
  const navigate = useNavigate();
  const theme = useTheme()
  const changePath = (topicId) => {
    navigate(`${ROUTE_PATHS.topics}/${topicId}`);
  };
  const coursesDetails = [
    {
      id: 1,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 2,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 3,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 4,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 5,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 6,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 7,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 8,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 9,
      onBtnClick: changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
  ];
  return (
    <MainLayout header footer>
      <MainWrap props={{marginTop : theme.spacing(8)}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} rowGap={5}>
            {coursesDetails.map((cources, index) => (
              <Grid item sm={12} lg={6} key={index}>
                <SecondaryCard details={cources} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainWrap>
    </MainLayout>
  );
}
