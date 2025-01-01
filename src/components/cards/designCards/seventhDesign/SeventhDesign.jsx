import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { PrimaryText } from "../../../../assets/css/common.styles";
import { colors } from "../../../../theme/colors";

const SeventhDesign = ({ listData }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      background: colors.extra.newColor18,
      padding:"2rem 0.5rem",
      margin:"auto -0.5rem"
    },
    items: {
      position: "relative",
      // background: colors.extra.newColor18,
      minWidth: "320px",
      height: "440px",
      boxShadow:
        "inset 5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1)",
      borderRadius: "15px",
      margin: "30px",
      transition: "0.5s",
    },
    box: {
      position: "absolute",
      top: "20px",
      left: "20px",
      right: "20px",
      bottom: "20px",
      background: colors.extra.mainColor,
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transition: "0.5s",
      "&:hover": {
        transform: "translateY(-50px)",
      },
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.03)",
      },
    },
    content: {
      padding: "20px",
      textAlign: "center",
      position: "relative",
    },
    number: {
      position: "absolute",
      top: "-10px",
      right: "0px",
      fontSize: "8rem",
      color: "rgba(255, 255, 255, 0.1)",
    },
  };

  const IconBox = styled(Box)(({ commonColor }) => ({
    width: "6rem",
    height: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2.5rem",
    border: `0.4rem solid ${commonColor || "teal"}`,
    borderRadius: "50%",
    background: commonColor || "teal",
    margin: "15px 0",
    boxShadow:
      "-0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45)",
  }));

  return (
    <Box sx={styles.container}>
      {listData?.map((items, index) => (
        <Box key={uuidv4()} sx={styles.items}>
          <Box sx={styles.box}>
            <Typography variant="h2" sx={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </Typography>

            <Box sx={styles.content}>
              <IconBox sx={styles.iconBox} commonColor={items?.accentColor}>
                <i className={items?.icon}></i>
              </IconBox>
              <PrimaryText
                props={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: items.color || "white",
                }}
              >
                {items.title}
              </PrimaryText>
              {items.description && (
                <PrimaryText
                  props={{
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    color: items.color || "white",
                  }}
                >
                  {items.description}
                </PrimaryText>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SeventhDesign;
