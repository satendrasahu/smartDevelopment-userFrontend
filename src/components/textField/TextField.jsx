import React from "react";
import { StyledTextField } from "./style";
import { InputAdornment, TextField as MUITextField } from "@mui/material";
const TextField = (props) => {
  const { name, label, value, handleChange, handleBlur, icon } = props;
  return (
    <StyledTextField>
      <MUITextField
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        variant="standard"
      />
      {/* <ErrorMessageComponent name={name} /> */}
    </StyledTextField>
  );
};

export default TextField;
