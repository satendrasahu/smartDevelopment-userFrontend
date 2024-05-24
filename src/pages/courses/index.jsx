import  React from "react";
import styled from "@mui/system/styled";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../assets/css/common.styles";
import PrimaryCard from "../../components/cards/PrimaryCard";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/routesPath";
import { Box, Grid } from "@mui/material";

export default function ResponsiveGrid() {
  const navigate = useNavigate()
  const changePath = (courseId)=>{
    navigate(`${ROUTE_PATHS.courses}/${courseId}`)
  }
  const coursesDetails = [
    {
      id: 1,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 2,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 3,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 4,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 5,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 6,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 7,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 8,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
    {
      id: 9,
      onBtnClick : changePath,
      heading: "Earn Coins by spinning",
      subHeading:
        "Whenever you play in our casino or live casino, you will earn Loyalty Points and Loyalty Coins.",
    },
  ];
  return (
    <MainLayout header footer>
      <MainWrap>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={1}
            rowGap={5}
          >
            {coursesDetails?.map((cources, index) => (
              <Grid item sm={12} md={6} lg={4} xl={3} key={index}>
                <PrimaryCard details={cources} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainWrap>
    </MainLayout>
  );
}
