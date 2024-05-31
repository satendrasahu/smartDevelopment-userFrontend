import React from "react";
import { StyledInputAdornment, StyledInputLabel, StyledOutlinedInput, StyledTextField } from "./style";
import ErrorMessageComponent from "../errorMessage/ErrorMessageComponent";
import IsRequiredIndicator from "../requiredIndicator/IsRequiredIndicator";

const TextField = (props) => {
  const {
    isRequired,
    name,
    label,
    value,
    onChange,
    onBlur,
    startIcon,
    type,
    endIcon,
    styledProps,
    placeHolder,
  } = props;
  return (
    <StyledTextField props={styledProps}>
      <StyledInputLabel>
        {label}
        {isRequired && <IsRequiredIndicator />}
      </StyledInputLabel>

      <StyledOutlinedInput
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        placeholder={placeHolder}
        startAdornment={
          startIcon && (
            <StyledInputAdornment  position="start">{startIcon}</StyledInputAdornment>
          )
        }
        endAdornment={
          endIcon && <StyledInputAdornment position="start">{endIcon}</StyledInputAdornment>
        }
      />
      <ErrorMessageComponent name={name} />
    </StyledTextField>
  );
};

export default TextField;
