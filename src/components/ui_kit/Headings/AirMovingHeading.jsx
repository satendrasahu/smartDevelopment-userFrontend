import React from "react";
import { Box, GlobalStyles } from "@mui/material";
import { border, fontSize, keyframes, positions } from "@mui/system";

// Keyframes for the 3D rotation animation
const rotateAnimation = keyframes`
  100% {
    transform: rotateY(-40deg) rotateX(-40deg);
  }
`;

// Styles for the 3D stage and layers
const styles = {
  stage: {
    display: "inline-block", // Fit the content width
    height: "fit-content", // Adjust height to fit content
    perspective: "9999px",
    transformStyle: "preserve-3d",
    position :"relative"
  },
  layer: (depth) => ({
    width: "100%",
    height: "100%",
    position: "absolute",
    transformStyle: "preserve-3d",
    animation: `${rotateAnimation} 5s infinite alternate ease-in-out`,
    animationFillMode: "forwards",
    transform: "rotateY(40deg) rotateX(33deg) translateZ(0)",
    "&:after": {
      font: '100px/0.65 "Pacifico", "Kaushan Script", Futura, "Roboto", "Trebuchet MS", Helvetica, sans-serif',
      content: '""',
      whiteSpace: "pre",
      // textAlign: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0px",//"50px",
      
      color: "whitesmoke",
      letterSpacing: "-2px",
      textShadow: "4px 0 10px rgba(0, 0, 0, 0.13)",
      transform: `translateZ(-${depth * 1.5}px)`,
      ...(depth >= 9 && { WebkitTextStroke: "3px rgba(0, 0, 0, 0.25)" }),
      ...(depth >= 10 && {
        WebkitTextStroke: "15px dodgerblue",
        textShadow: "6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b",
      }),
      ...(depth >= 11 && { WebkitTextStroke: "15px #0077ea" }),
      ...(depth === 19 && { WebkitTextStroke: "17px rgba(0, 0, 0, 0.1)" }),
      ...(depth === 0 && { color: "#fff", textShadow: "none" }),
    },
  }),
};


// const styles = {
//   stage: {
//     display: "inline-block", // Keep it inline to fit content width
//     height: "100px", // Set a fixed height to prevent overflowing
//     perspective: "1000px",
//     transformStyle: "preserve-3d",
//     overflow: "hidden", // Prevent overflow from animation or positioning
//     position: "relative", // Make the container relative to position layers
//     width: "100%", // Ensure it takes full width of the parent container
//   },
//   layer: (depth) => ({
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     animation: `${rotateAnimation} 5s infinite alternate ease-in-out`,
//     transformStyle: "preserve-3d",
//     transform: `translateZ(-${depth * 1.5}px)`,
//     "&:after": {
//       content: '""',
//       font: '100px/0.65 "Pacifico", "Kaushan Script", Futura, "Roboto", "Trebuchet MS", Helvetica, sans-serif',
//       color: "whitesmoke",
//       position: "absolute",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%, -50%)", // Center the text
//       letterSpacing: "-2px",
//       textShadow: "4px 0 10px rgba(0, 0, 0, 0.13)",
//       ...(depth >= 9 && { WebkitTextStroke: "3px rgba(0, 0, 0, 0.25)" }),
//       ...(depth >= 10 && {
//         WebkitTextStroke: "15px dodgerblue",
//         textShadow: "6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b",
//       }),
//       ...(depth >= 11 && { WebkitTextStroke: "15px #0077ea" }),
//       ...(depth === 19 && { WebkitTextStroke: "17px rgba(0, 0, 0, 0.1)" }),
//       ...(depth === 0 && { color: "#fff", textShadow: "none" }),
//     },
//   }),
// };



const AirMovingHeading = ({ text = "Custom Text" }) => {
  return (
    // <Box className="mainAirMovingHeadingContainer">
    //   <GlobalStyles
    //     styles={{
    //       "@font-face": {
    //         fontFamily: "Pacifico",
    //         src: "url(//fonts.googleapis.com/css?family=Pacifico)",
    //       },
    //     }}
    //   />
      <Box sx={styles.stage}>
        {Array.from({ length: 2 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              ...styles.layer(index),
              "&:after": {
                ...styles.layer(index)["&:after"],
                content: `"${text}"`,
              },
            }}
          />
        ))}
      </Box>
    // </Box>
  );
};

export default AirMovingHeading;
