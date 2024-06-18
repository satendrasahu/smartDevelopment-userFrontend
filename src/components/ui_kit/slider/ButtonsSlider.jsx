import React, { memo, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { StyledSlider, SlickSliderWrap, SliderCard } from "./styles";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonsSlider = (props) => {
  const {
    renderData,
    extraButtons,
    changeActiveTab,
    gameSubCategoryActiveTab,
    staticsButtons,
  } = props;

  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [isPrevActive, setPrevActive] = useState(false);
  const [isNextActive, setNextActive] = useState(false);

  const checkButtonsStatus = () => {
    if (sliderRef.current) {
      const sliderInfo = sliderRef.current.innerSlider;
      setPrevActive(sliderInfo.state.currentSlide > 0);
      setNextActive(
        sliderInfo.state.currentSlide <
          sliderInfo.state.slideCount - sliderInfo.props.slidesToShow
      );
    }
  };

  const afterChangeHandler = () => {
    checkButtonsStatus();
  };

  const casinoFilterSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 13,
    arrows: true,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          arrows: false,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          arrows: false,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 579,
        settings: {
          slidesToScroll: 4,
          variableWidth: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToScroll: 3,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    checkButtonsStatus();
  }, []);

  console.log(isPrevActive, isNextActive);
  return (
    <StyledSlider isPrevActive={isPrevActive} isNextActive={isNextActive}>
      <Box style={{ display: "flex", overflow: "hidden" }}>
        <SlickSliderWrap>
          <Slider
            {...casinoFilterSlider}
            ref={sliderRef}
            afterChange={afterChangeHandler}
          >
            {staticsButtons?.map(
              (button) =>
                button?.isShow && (
                  <SliderCard key={uuidv4()}>
                    <NavLink
                      className={(isActive) =>
                        isActive && gameSubCategoryActiveTab === 0
                          ? "active"
                          : ""
                      }
                      to={button?.id}
                      style={button?.style}
                      onClick={() =>
                        button?.onClick && button?.onBtnClick(button?.id)
                      }
                    >
                      {button?.icon}{" "}
                      <span className="web-game-title">{button?.title}</span>
                    </NavLink>
                    <span className="mob-game-title">{button?.title}</span>
                  </SliderCard>
                )
            )}
            {extraButtons?.map(
              (button) =>
                button?.isShow && (
                  <SliderCard key={uuidv4()}>
                    <NavLink
                      to={button?.id}
                      style={button?.style}
                      onClick={() =>
                        button?.onClick && button?.onBtnClick(button?.id)
                      }
                    >
                      {button?.icon}{" "}
                      <span className="web-game-title">{button?.title}</span>
                    </NavLink>
                    <span className="mob-game-title">{button?.title}</span>
                  </SliderCard>
                )
            )}
            {renderData?.map((renderData) => {
              return (
                <SliderCard key={uuidv4()}>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      [
                        isActive ? "" : "",
                        gameSubCategoryActiveTab ===
                        renderData?.gameSubCategoryId
                          ? "active"
                          : "",
                      ].join(" ")
                    }
                    onClick={() => renderData?.onBtnClick(renderData?.id)}
                  >
                    {renderData?.icon}
                    <span className="web-game-title">
                      {startCase(toLower(renderData?.title))}
                    </span>
                  </NavLink>
                  <span className="mob-game-title">
                    {startCase(toLower(renderData?.title))}
                  </span>
                </SliderCard>
              );
            })}
          </Slider>
        </SlickSliderWrap>
      </Box>
    </StyledSlider>
  );
};

ButtonsSlider.defaultProps = {
  renderData: { rows: [] },
  extraButtons: [],
  staticsButtons: [],
  changeActiveTab: () => {},
  gameSubCategoryActiveTab: null,
};

export default memo(ButtonsSlider)
