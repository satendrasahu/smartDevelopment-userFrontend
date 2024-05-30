import React from "react";
import { StyledTextField } from "./style";
import { InputAdornment, TextField as MUITextField } from "@mui/material";
import ErrorMessageComponent from "../errorMessage/ErrorMessageComponent";
const TextField = (props) => {
  const { name, label, value, onChange, onBlur, icon,placeHolder } = props;
  return (
    <StyledTextField>
      <MUITextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeHolder ={placeHolder}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        variant="standard"
      />
      <ErrorMessageComponent name={name} />
    </StyledTextField>
  );
};

export default TextField;
