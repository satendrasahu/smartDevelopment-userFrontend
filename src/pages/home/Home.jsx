import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from "../../components/ui_kit/mainLayout/MainLayout"
import { CenteredItemBox, MainWrap, PrimaryText } from '../../assets/css/common.styles'
import { appDetails } from '../../utils/common.Data'
const Home = () => {
  return (
    <MainLayout header footer >
      <MainWrap> 
        <CenteredItemBox>
          <PrimaryText>{appDetails.APP_TITLE}</PrimaryText>
        </CenteredItemBox>
      </MainWrap>
    </MainLayout>
  )
}

export default Home
