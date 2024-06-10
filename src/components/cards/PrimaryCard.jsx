import { Typography } from "@mui/material";
import React from "react";
import { StyledPrimaryCard } from "./style";
import { CenteredItemBox, PrimaryButton } from "../../assets/css/common.styles";
import { useTranslation } from "react-i18next";

const PrimaryCard = (props) => {
  const { details } = props;
  const { t } = useTranslation();
  return (
    <StyledPrimaryCard>
      <Typography className="Counter" variant="span">
        {details?.index}
      </Typography>
      <Typography className="number-heading">{details?.heading}</Typography>
      <Typography className="number-text">{details?.subHeading}</Typography>
      <img
        style={{ height: 300 }}
        src={
          details?.imageUrl ||
          "https://www.onlybets.tv/static/media/loyalty-2.7028b3d74d9977667d0c.png"
        }
        alt="image1"
      />
      <CenteredItemBox>
        <PrimaryButton
          props={{ width: "100%" }}
          onClick={() => details.onBtnClick(details?.id)}
        >
          {t("exploreNow")}
        </PrimaryButton>
      </CenteredItemBox>
    </StyledPrimaryCard>
  );
};

export default PrimaryCard;
