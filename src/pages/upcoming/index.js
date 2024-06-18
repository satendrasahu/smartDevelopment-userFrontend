import { useTheme } from '@emotion/react';
import React from 'react'
import { useTranslation } from 'react-i18next';
import MainLayout from '../../components/ui_kit/mainLayout/MainLayout';
import { CenteredItemBox, MainWrap, PrimaryText } from '../../assets/css/common.styles';

const UpComing = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
      <MainLayout header footer>
        <MainWrap>
          <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
            <PrimaryText props={{ fontSize: theme.spacing(2) }}>
              {t("ourProgram", { name: t("upComing") })}
            </PrimaryText>
          </CenteredItemBox>
        </MainWrap>
      </MainLayout>
    );
}

export default UpComing
