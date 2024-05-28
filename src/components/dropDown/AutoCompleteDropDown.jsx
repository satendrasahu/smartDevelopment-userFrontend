import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { StyledAutocomplete } from './style';

export default function AutoCompleteDropDown(props) {
    const {renderData,placeHolder} = props;

  const handleSelectionChange = (event, value) => {
    if (value) {
      console.log('Selected item:', value);
    }
  };

  const [open, setOpen] = useState(true);

  return (
    <StyledAutocomplete
      disablePortal

      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(true)}

      id="combo-box-demo"
      options={renderData}
      onChange={handleSelectionChange}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
    />
  );
}