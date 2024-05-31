// TopicOverview.js
import React, { useCallback, useState } from "react";
import MainLayout from "../../../components/ui_kit/mainLayout/MainLayout";
import {
  CenteredItemBox,
  MainWrap,
  PrimaryButton,
  PrimaryText,
  StyledDivider,
} from "../../../assets/css/common.styles";
import CustomAccordion from "../../../components/accordion/CustomAccordion";
import { useTheme } from "@emotion/react";
import { questionDetails } from "./questionDetails";
import AnswerDetails from "./AnswerDetails";
import { useTranslation } from "react-i18next";
import InfinitePageScroller from "../../../components/infinitePageScroller/InfinitePageScroller";

const TopicOverview = () => {
  const theme = useTheme();
  const [hasMore, setHasMore] = useState(true);
  const topicName = "Complete Your KYC";
  const { t } = useTranslation();
  const [renderData, setRenderData] = useState(questionDetails()?.slice(0, 10));
  const fetchMoreData = useCallback(() => {
    setRenderData([
      ...renderData,
      ...questionDetails()?.slice(renderData.length, renderData.length + 10),
    ]);
    setHasMore(renderData.length < questionDetails().length);
    // const payload = {
    //   subCategoryId: gameSubCategoryActiveTab,
    //   pageNo: pagination?.page,
    //   limit: pagination?.limit,
    //   isMobile: isMobile,
    // };
    // if (gameSubCategoryActiveTab !== 0) {
    //   dispatch(fetchGamesThunk({ payload }));
    //   setPagination((prev) => ({
    //     ...prev,
    //     page: prev?.page + 1,
    //   }));
    // }
  });

  return (
    <MainLayout header footer>
      <MainWrap>
        <CenteredItemBox>
          <StyledDivider props={{ width: "50%" }} />
        </CenteredItemBox>

        <CenteredItemBox>
          <PrimaryText
            props={{
              padding: theme.spacing(1),
              borderRadius: theme.spacing(1),
              border: `1px solid ${theme.colors.extra.highLightColor}`,
              boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
            }}
          >
            {topicName}
          </PrimaryText>
        </CenteredItemBox>

        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <StyledDivider />
        </CenteredItemBox>

        <InfinitePageScroller
          renderData={renderData}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
          renderComponent={(renderProps) => (
            <CustomAccordion
              key={renderProps?.id}
              title={renderProps?.question}
              details={<AnswerDetails renderProps={renderProps} />}
              count={renderProps?.id}
            />
          )}
        />

        {/* {questionDetails()?.map((data) => (
          <CustomAccordion
            key={data?.id}
            title={data?.question}
            details={<AnswerDetails  data={data}/>}
            count={data?.id}
          />
        ))} */}

        <CenteredItemBox props={{ justifyContent: "space-between" }}>
          <PrimaryButton>{t("previous")}</PrimaryButton>
          <PrimaryButton>{t("next")}</PrimaryButton>
        </CenteredItemBox>
      </MainWrap>
    </MainLayout>
  );
};

export default TopicOverview;
