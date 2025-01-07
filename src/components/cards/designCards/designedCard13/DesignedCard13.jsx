import React from "react";
import "./style.css";
import { Box } from "@mui/material";

const SocialCards = (props) => {
  const { socialData } = props;
  return (
    <Box className="card">
      <ul>
        {socialData?.map((data) => {
          return (
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href={data?.src} target="_blank">{data?.icon}</a>
              <Box className="text">{data?.name}</Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default SocialCards;
