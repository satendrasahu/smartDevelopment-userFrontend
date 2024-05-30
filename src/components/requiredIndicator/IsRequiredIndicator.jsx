import React, { memo } from "react";
import { StyledTypography } from "./style";

const IsRequiredIndicator = () => {
  return <StyledTypography>*</StyledTypography>;
};

export default memo(IsRequiredIndicator)
