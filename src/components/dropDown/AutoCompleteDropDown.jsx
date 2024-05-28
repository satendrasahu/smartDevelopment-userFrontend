import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteDropDown(props) {
    const {renderData,placeHolder} = props;

  const handleSelectionChange = (event, value) => {
    if (value) {
      console.log('Selected item:', value);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={renderData}
      sx={{ width: 300 }}
      onChange={handleSelectionChange}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
    />
  );
}