import { memo, useState, useRef, useEffect } from "react";
import {
  Grid,
  InputAdornment,
  IconButton,
  Typography,
  Box,
  Fab,
  Tooltip,
  Button,
} from "@mui/material/index";
import { useTranslation } from "react-i18next";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { CustomTextField, StyledInputLabel } from "./style";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { StyledTooltip } from "../../assets/css/common.styles";
const CopyButton = (props) => {
  const {
    value,
    copyTitleMessage,
    title,
    handleCopyClick,
    name,
    isTextCopied,
  } = props;
  const { t } = useTranslation();
  const { isCopy, message } = isTextCopied || {};

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();
  const theme = useTheme();

  const buttonSx = {
    background: theme.colors.primary.btnColor,
    height: 36,
    width: 36,
    zIndex: 1,
    "&:hover": {
      background: theme.colors.primary.btnHoverColor,
    },
    ...(success &&
      isCopy && {
        bgcolor: green[500],
        "&:hover": {
          bgcolor: green[900],
        },
      }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 100);
    }
  };

  

  return (
    <StyledTooltip title="Copy Content">
      <IconButton onClick={handleCopyClick} aria-label="Copy">
        <Box>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success && isCopy ? (
              <CheckIcon fontSize="small" />
            ) : (
              <FileCopyIcon fontSize="small" />
            )}
          </Fab>
        </Box>
      </IconButton>
    </StyledTooltip>
  );
};

CopyButton.defaultProps = {
  value: "",
  copyTitleMessage: "",
  title: "",
  name: "",
  handleCopyClick: () => {},
  isTextCopied: {},
};

export default memo(CopyButton);
