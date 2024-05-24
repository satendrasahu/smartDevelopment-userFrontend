// MyCircularProgress.js
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

// Create a styled component using MUI's styled utility
const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.colors.primary.btnColor,
}));

const MyCircularProgress = (props) => {
  const { value, size, thickness, variant } = props;

  return (
    <StyledCircularProgress
      variant={variant}
      value={value}
      size={size}
      thickness={thickness}
    />
  );
};
MyCircularProgress.defaultProps = {
  size: 50,
  thickness: 5,
  variant: "indeterminate",
  value:0
};
export default MyCircularProgress;
