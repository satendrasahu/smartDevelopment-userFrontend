import React from "react";
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout";
import {
  CenteredItemBox,
  MainWrap,
  PrimaryText,
} from "../../assets/css/common.styles";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

const Training = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
      <MainLayout header footer sidebar>
      <MainWrap>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ fontSize: theme.spacing(2) }}>
            {t("ourProgram", { name: t("training") })}
          </PrimaryText>
        </CenteredItemBox>
      </MainWrap>
    </MainLayout>
  );
};

export default Training;
