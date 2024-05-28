// TopicOverview.js
import React from "react";
import MainLayout from "../../../components/ui_kit/mainLayout/MainLayout";
import {
  CenteredItemBox,
  MainWrap,
  PrimaryText,
  StyledDivider,
} from "../../../assets/css/common.styles";
import CustomAccordion from "../../../components/accordion/CustomAccordion";
import { useTheme } from "@emotion/react";
import { questionDetails } from "./questionDetails";
import AnswerDetails from "./AnswerDetails";

const TopicOverview = () => {
  const theme = useTheme();
  const topicName = "Complete Your KYC";

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

        

        {questionDetails?.map((data) => (
          <CustomAccordion
            key={data?.id}
            title={data?.question}
            subtitle={data?.overView}
            details={<AnswerDetails  data={data}/>}
            count={data?.id}
          />
        ))}
      </MainWrap>
    </MainLayout>
  );
};

export default TopicOverview;
