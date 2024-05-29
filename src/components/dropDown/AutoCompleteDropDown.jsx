import React, { memo } from "react";
import TextField from "@mui/material/TextField";
import { CustomPaper, StyledAutocomplete } from "./style";
import { Typography } from "@mui/material";
import { colors } from "../../theme/colors";
import { useTranslation } from "react-i18next";

const AutoCompleteDropDown = (props) => {
  const { renderData, placeHolder, getSelectedValue } = props;
  const { t } = useTranslation();

  const handleSelectionChange = (_, value) => {
    if (value) {
      getSelectedValue(value);
    }
  };

  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={renderData}
      onChange={handleSelectionChange}
      PaperComponent={(props) => <CustomPaper {...props} />}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
      noOptionsText={
        <Typography sx={{ color: colors.primary.textColor }}>
          {t("noOptionsAvailable")}
        </Typography>
      }
    />
  );
};

AutoCompleteDropDown.defaultProps = {
  renderData: [],
  placeHolder: "",
  getSelectedValue: () => {},
};

export default memo(AutoCompleteDropDown);
