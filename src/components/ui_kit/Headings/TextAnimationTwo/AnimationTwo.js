import React from "react";
import "./animationTwo.css"; // Ensure this file contains the @keyframes definition
import { PrimaryText } from "../../../../assets/css/common.styles";

const NeonText = (props) => {
  const { title } = props;

  const neonStyle = {
    color: "#fff",
    fontSize: "clamp(2rem, 5vw, 6rem)",
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: '"Josefin Sans", sans-serif',
    background: "linear-gradient(to right, #095fab 10%, #25abe8 50%, #57d75b 60%)",
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textclip 1.5s linear infinite",
    display: "inline-block",
  };

  return <PrimaryText style={neonStyle}>{title}</PrimaryText>;
};

NeonText.defaultProps = {
  title: "Dummy Text",
};

export default NeonText;
