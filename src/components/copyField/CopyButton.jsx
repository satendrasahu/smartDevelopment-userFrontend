import { memo, useState, useRef, useEffect } from "react";
import {
  IconButton,
  Box,
  Fab,
} from "@mui/material/index";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import { StyledTooltip } from "../../assets/css/common.styles";

const CopyButton = (props) => {
  const {
    handleCopyClick,
    isTextCopied,
  } = props;
  const { isCopy } = isTextCopied || {};

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
  handleCopyClick: () => {},
  isTextCopied: {},
};

export default memo(CopyButton);
