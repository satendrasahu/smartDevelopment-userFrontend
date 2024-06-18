import { styled } from "@mui/material/styles";

export const StyledSlider = styled("div")(({ theme,isPrevActive, isNextActive }) => {
console.log("isPrevActive, isNextActive",isPrevActive, isNextActive)
  return (
    {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0.5, 0),
      },
      "& a": {
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.spacing(1.25),
        background: theme.colors.secondary.btnColor,
        color: theme.colors.primary.textColor,
        textDecoration: "none",
        display: "flex !important",
        alignItems: "center",
        gap: theme.spacing(0.625),
        fontSize: theme.spacing(0.875),
        whiteSpace: "nowrap",
        transition: "all ease .2s",
        [theme.breakpoints.down("md")]: {
          fontSize: theme.spacing(0.675),
          justifyContent: "center",
        },
        "& svg": {
          minWidth: "22px",
          [theme.breakpoints.down("md")]: {
            minWidth: "15px",
          },
        },
        "& img": {
          filter: "brightness(10)",
          transition: "all ease .1s",
        },
        "&:hover img, &.active img": {
          filter: "brightness(0.35)",
        },
        "&.active ~ .mob-game-title": {
          color: theme.colors.extra.mainColor,
        },
        "&.active, &:hover": {
          background: theme.colors.primary.btnColor,
          color: theme.colors.extra.whiteColor,
          "& svg": {
            "& path": {
              fill: theme.colors.extra.whiteColor,
            },
          },
        },
      },
      "& .slick-list": {
        WebkitMaskImage:
          "linear-gradient(90deg, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)",
      },
      "& .slick-track": {
        display: "flex",
        flexWrap: "nowrap",
        marginLeft: theme.spacing(-1.1),
      },
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3),
      },
      "& .slick-slider.slick-initialized": {
        "& .slick-next": {
          right: "-92px !important",
          borderRadius: "0 50px 50px 0 !important",
          height: "37px !important",
          width: "37px !important",
          borderColor: "transparent !important",
          background: isNextActive ? theme.colors.extra.highLightColor :"red",
          // "&.active": {
          //   background: isPrevActive ? theme.colors.extra.highLightColor :"inherit",
          // },
        },
        "& .slick-prev": {
          right: "-55px !important",
          left: "inherit !important",
          borderRadius: "50px 0 0 50px !important",
          height: "37px !important",
          width: "37px !important",
          borderColor: "transparent !important",
          background: isPrevActive ? theme.colors.extra.highLightColor :"red",
        //  "&.active": {
        //     background: theme.colors.extra.highLightColor,
        //   },
        },
      },
    }
  )
});

export const SlickSliderWrap = styled("div")(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(6)})`,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const SliderCard = styled("div")(({ theme }) => ({
  display: "flex !important",
  minWidth: theme.spacing(5),
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(0, 0.313),
  [theme.breakpoints.down("md")]: {
    minWidth: theme.spacing(7),
  },
  "& .web-game-title": {
    display: "none",
    color: theme.colors.primary.textColor,
  },
  "& .mob-game-title": {
    display: "block",
    marginTop: theme.spacing(0.313),
    fontSize: theme.spacing(0.85),
    color: theme.colors.primary.textColor,
    maxWidth: "90%",
    wordBreak: "break-word",
    textAlign: "center",
    minWidth: "max-content",
  },
  "& a": {
    minWidth: theme.spacing(3.75),
    height: theme.spacing(3.75),
    width: theme.spacing(3.75),
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg, & img": {
      marginRight: 0,
      width: theme.spacing(1.875),
      height: theme.spacing(1.875),
      minWidth: theme.spacing(1.875),
      minHeight: theme.spacing(1.875),
    },
  },
}));
