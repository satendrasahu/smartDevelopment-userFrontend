import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";

import { StyledSingleCardContainer } from "./style";
import { colors } from "../../../../theme/colors";



// Function to generate random gradient color
const generateRandomGradient = () => {
  const gradientColors = [
    "rgba(64, 175, 255, 1)", "rgba(63, 97, 255, 1)",
    "rgba(255, 154, 63, 1)", "rgba(255, 75, 64, 1)",
    "rgba(189, 255, 83, 1)", "rgba(43, 250, 82, 1)",
    "rgba(64, 255, 242, 1)", "rgba(63, 188, 255, 1)",
    "rgba(255, 64, 156, 1)", "rgba(255, 63, 63, 1)",
    "rgba(64, 76, 255, 1)", "rgba(174, 63, 255, 1)"
  ];
  
  const allColors = [
    ...gradientColors, 
    colors.extra.highLightColor,
    colors.extra.successColor,
    colors.extra.errorColor,
    colors.extra.whiteColor,
    colors.primary.btnColor,
    colors.secondary.btnColor,
  ];
  const randomColor1 = allColors[Math.floor(Math.random() * allColors.length)];
  const randomColor2 = allColors[Math.floor(Math.random() * allColors.length)];

  return `linear-gradient(128deg, ${randomColor1} 0%, ${randomColor2} 100%)`;
};

const carousel = (slider) => {
  const z = 300;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function CircularSlider3D({ renderData }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <StyledSingleCardContainer>
      <Box className="scene">
        <Box className="carousel keen-slider" ref={sliderRef}>
          {renderData?.map((listData, ind) => {
            const bgColor = generateRandomGradient(); // Random background color
            return (
              <Box
                key={ind}
                className="carousel__cell"
                sx={{
                  background: bgColor,
                }}
              >
                {listData?.title}
              </Box>
            );
          })}
        </Box>
      </Box>
    </StyledSingleCardContainer>
  );
}
