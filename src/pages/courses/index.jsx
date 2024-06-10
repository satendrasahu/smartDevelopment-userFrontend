import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import { MainWrap } from "../../assets/css/common.styles";
import PrimaryCard from "../../components/cards/PrimaryCard";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/routesPath";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesDataThunk } from "../../redux/thunks/courses/courses.thunk";

export default function ResponsiveGrid() {
  const navigate = useNavigate();
  const { coursesData } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const changePath = (courseId) => {
    navigate(`${ROUTE_PATHS.courses}/${courseId}`);
  };

  const renderCoursesData = useCallback(() => {
    const result = coursesData?.data?.map((course,index) => {
      return {
        index :index+1,
        onBtnClick: changePath,
        heading :course?.courseName,
        subHeading:course?.courseDetails,
        id:course?._id

      };
    });
    return result || [];
  }, [coursesData]);

  useEffect(() => {
    dispatch(fetchCoursesDataThunk());
  }, []);
  return (
    <MainLayout header footer>
      <MainWrap>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} rowGap={5}>
            {renderCoursesData()?.map((cources, index) => (
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
