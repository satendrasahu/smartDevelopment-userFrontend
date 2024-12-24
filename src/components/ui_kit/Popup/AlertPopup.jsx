import React, { memo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
} from "@mui/material";
import {
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  WarningOutlined,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { colors } from "../../../theme/colors";
import { PrimaryButton, SecondaryText } from "../../../assets/css/common.styles";


const AlertPopup = (props) => {
  const {t}= useTranslation();
  const {
    open,
    onClose,
    onConfirm,
    title,
    buttonTitle = t("ok"),
    message,
    type,
    width,
    height,
    minWidth,
    minHeight,
    isCancelButton,
    children,
  } = props;

  // Function to render icons based on type
  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <CheckCircleOutlineOutlined
            fontSize="large"
            sx={{ color: "green" }}
          />
        );
      case "error":
        return (
          <ErrorOutlineOutlined fontSize="large" sx={{ color: "red" }} />
        );
      case "warning":
        return <WarningOutlined fontSize="large" sx={{ color: "orange" }} />;
      default:
        return null;
    }
  };

  const getTitleColor = () => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        return "black";
    }
  };

  const getButtonColor = () => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        return colors.primary.btnColor;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      sx={{
        "& .MuiPaper-elevation": {
          backgroundColor: "#333", // Default dark background
          borderRadius: "8px",
          padding: 2,
          width,
          height,
          minWidth,
          minHeight,
        },
      }}
    >
      <DialogTitle
        sx={{
          color: getTitleColor(),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ padding: "0.5rem" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {children ? (
        children
      ) : (
        <>
          {message && (
            <DialogContent
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {getIcon()}
              <DialogContentText sx={{ color: "#fff", marginLeft: "8px" }}>
                {message}
              </DialogContentText>
            </DialogContent>
          )}
          <DialogActions>
            {isCancelButton && (
              <Button onClick={onClose} color="primary">
                {t("cancel")}
              </Button>
            )}

            <PrimaryButton
              props={{
                width: "max-content",
                backgroundColor: getButtonColor(),
              }}
              onClick={onConfirm}
            >
              <SecondaryText>{buttonTitle}</SecondaryText>
            </PrimaryButton>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

AlertPopup.defaultProps = {
  buttonTitle: "OK",
  type: "info",
  width: "400px",
  height: "auto",
  minWidth: "300px",
  minHeight: "200px",
  isCancelButton: false,
};

export default memo(AlertPopup);
