import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainLayout from "../../../components/ui_kit/mainLayout/MainLayout";
import {
  CenteredItemBox,
  MainWrap,
  SecondaryText,
} from "../../../assets/css/common.styles";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/routesPath";
import SecondaryCard from "../../../components/cards/SecondaryCard";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useEffect } from "react";
import { fetchTopicsDataThunk } from "../../../redux/thunks/courses/courses.thunk";
import { useTranslation } from "react-i18next";
import MyCircularProgress from "../../../components/progressbar/MyCircularProgress";

export default function ResponsiveGrid() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const theme = useTheme();
  const [t] = useTranslation();
  const { topicsData, loader } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const changePath = (topicId) => {
    navigate(`${ROUTE_PATHS.topics}/${topicId}`);
  };

  const renderTopicsData = useCallback(() => {
    const result = topicsData?.data?.map((course, index) => {
      return {
        index: index + 1,
        onBtnClick: changePath,
        heading: course?.topicName,
        subHeading: course?.topicDetails,
        id: course?._id,
      };
    });
    return result || [];
  }, [topicsData]);

  useEffect(() => {
    const paylaod = { ref_courseId: courseId };
    dispatch(fetchTopicsDataThunk(paylaod));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <MainLayout header footer>
      <MainWrap props={{ marginTop: theme.spacing(8) }}>
        <Box sx={{ flexGrow: 1 }}>
          {loader ? (
            <CenteredItemBox>
              <Box>
                <MyCircularProgress />
                <SecondaryText>{t("loading")}</SecondaryText>
              </Box>
            </CenteredItemBox>
          ) : (
            <Grid container spacing={1} rowGap={5}>
              {renderTopicsData()?.map((cources, index) => (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <SecondaryCard details={cources} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </MainWrap>
    </MainLayout>
  );
}
