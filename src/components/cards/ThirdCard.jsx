import React from "react";
import { StyledThirdCard } from "./style";
import { Typography } from "@mui/material";
import { CenteredItemBox, PrimaryButton, PrimaryText } from "../../assets/css/common.styles";
import { useTranslation } from "react-i18next";

const ThirdCard = (props) => {
  const { t } = useTranslation();
  const { details } = props;
  return (
    <StyledThirdCard>
      <Typography className="Counter" variant="span">
        {details?.index}
      </Typography>
      <PrimaryText props={{textAlign:'center',fontSize:"1rem", fontWeight:"500", width :"100%"}}>{details?.heading}</PrimaryText> 
    </StyledThirdCard>
  );
};

export default ThirdCard;
