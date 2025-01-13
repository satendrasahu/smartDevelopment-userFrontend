import React, { memo } from "react";
import { Grid } from "@mui/material";
import { CustomTextArea, StyledInputLabel, StyledTextField } from "./style";
import { colors } from "../../theme/colors";
import IsRequiredIndicator from "../requiredIndicator/IsRequiredIndicator";
// Custom styled TextArea component using styled API

const TextArea = (props) => {
  const {
    isRequired,
    name,
    label,
    outerLabel,
    value,
    onChange,
    onBlur,
    startIcon,
    type,
    endIcon,
    styledProps,
    placeHolder,
    spellCheck,
  } = props;
  return (
    <StyledTextField props={styledProps}>
      <StyledInputLabel>
        {outerLabel}
        {isRequired && <IsRequiredIndicator />}
      </StyledInputLabel>
      <CustomTextArea
        multiline
        spellCheck={props.spellCheck || false}
        placeholder={placeHolder}
        InputProps={{
          style: {
            color: colors.extra.whiteColor,
          },
        }}
        {...props}
      />
    </StyledTextField>
  );
};

TextArea.defautlProps = {
  placeholder: "",
  type: "text",
  rows: 1,
  variant: "",
  helperText: "",
  spellCheck: false,
};

export default memo(TextArea);
