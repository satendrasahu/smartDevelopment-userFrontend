import React from "react";
import { Avatar, Box, CircularProgress } from "@mui/material";
import { SecondaryText } from "../../../assets/css/common.styles";
import AlertPopup from "../../../components/ui_kit/Popup/AlertPopup";
import useProfileHook from "./hooks/useProfileHook";
import { colors } from "../../../theme/colors";

const ProfilePic = () => {
  const {
    handleAlertPopupClose,
    handleMouseEnter,
    handleMouseLeave,
    handleImageUpload,
    handleRemoveImage,
    t,
    uploadedImage,
    isHovering,
    updateUserProfilePicLoader,
    user,
    alertPopup,
  } = useProfileHook();
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        margin: "1rem auto",
        position: "relative",
        width: "fit-content",
        borderRadius: "50%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {updateUserProfilePicLoader ? (
        <CircularProgress
          size={95}
          sx={{
            color: colors.primary.btnColor,
          }}
        />
      ) : (
        <Avatar
          alt={user?.username}
          src={uploadedImage}
          sx={{
            width: 150,
            height: 150,
            cursor: "pointer",
            textTransform: "capitalize",
            backgroundColor: "lightgray",
            color: "black",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 1s ease-in-out",
            position: "relative",
            "&:hover": {
              borderRadius: "2% !important",
              width: 220,
              height: 220,
              transition: "all 1s ease-in-out",
            },
            "&::after": isHovering
              ? {
                  content: `"${t("uploadNewImage")}"`,
                  position: "absolute",
                  bottom: 0,
                  color: colors.extra.whiteColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  backgroundColor: colors.primary.btnColor,
                  width: "100%",
                  padding: "0.3rem",
                }
              : {},
          }}
          onClick={() => document.getElementById("imageUploadInput").click()}
        >
          {!isHovering && (
            <SecondaryText
              props={{
                whiteSpace: "nowrap", // Prevent line breaks
                overflow: "hidden", // Hide overflow
                textOverflow: "ellipsis", //
                color: colors.extra.darkColor,
              }}
            >
              {`${user?.firstName || ""} ${user?.lastName || ""}`}
            </SecondaryText>
          )}
        </Avatar>
      )}

      {uploadedImage && (
        <SecondaryText
          props={{
            fontSize: "0.5rem",
            fontWeight: 400,
            marginTop: "0.25rem",
            cursor: "pointer",
          }}
          onClick={handleRemoveImage}
          color="error"
        >
          {updateUserProfilePicLoader ? t("uploading") : t("removeImage")}
        </SecondaryText>
      )}

      <input
        id="imageUploadInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

      <SecondaryText props={{ fontSize: 10 }}>
        {t("fileAllowed", {
          files: "PNG, JPEG, JPG",
          size: "2 MB",
        })}
      </SecondaryText>

      <AlertPopup
        open={alertPopup?.isOpen}
        onClose={handleAlertPopupClose}
        message={t(alertPopup?.message)}
        type={alertPopup?.messageType}
        minHeight={"auto"}
      />
    </Box>
  );
};

export default ProfilePic;
