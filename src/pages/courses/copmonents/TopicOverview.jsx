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

const TopicOverview = () => {
  const theme = useTheme();
  const topicName = "Complete Your KYC";
  const questionDetails = [
    {
      id :1,
      question: "game1",
      overView: "this is Overview",
      answer: "aviator",
      answerLanguage: ["ES", "PT"],
    },
    {
      id :2,
      question: "game1",
      overView: "this is Overview",
      answer: "aviator",
      answerLanguage: ["ES", "PT"],
    },
    {
      id:3,
      question: "game1",
      overView: "this is Overview",
      answer: "aviator",
      answerLanguage: ["ES", "PT"],
    },
   
  ];
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

        {questionDetails?.map((data) => {
          return (
            <CustomAccordion
              title={data?.question}
              subtitle={data?.overView}
              details={data?.answer}
              count={data?.id}
            />
          );
        })}
      </MainWrap>
    </MainLayout>
  );
};

export default TopicOverview;
