import React from "react";
import { StyledSecondaryCard } from "./style";
import { Typography } from "@mui/material";
import { CenteredItemBox, PrimaryButton } from "../../assets/css/common.styles";
import { useTranslation } from "react-i18next";

const SecondaryCard = (props) => {
  const { t } = useTranslation();
  const { details } = props;
  return (
    <StyledSecondaryCard>
      <Typography className="Counter" variant="span">
        {details?.index}
      </Typography>
      <Typography className="number-heading">{details?.heading}</Typography>
      {details?.subHeading &&<Typography className="number-text">{details?.subHeading}</Typography>}
      {details?.isButton && (
        <CenteredItemBox>
          <PrimaryButton
            props={{ width: "100%" }}
            onClick={() => details.onBtnClick(details?.id)}
          >
            {t("exploreNow")}
          </PrimaryButton>
        </CenteredItemBox>
      )}
    </StyledSecondaryCard>
  );
};

export default SecondaryCard;
