import { ROUTE_PATHS } from "../../routes/routesPath";

export const homeData = (t, visitPage) => [
  {
    index: 1,
    heading: t("kyc1"),
    subheading: t("update now"),
    id: ROUTE_PATHS.courses,
    onBtnClick: visitPage,
  },

  {
    index: 2,
    heading: t("kyc2"),
    subheading: t("update now"),
    id: ROUTE_PATHS.training,
    onBtnClick: visitPage,
  },
  {
    index: 3,
    heading: t("kyc3"),
    subheading: t("update now"),
    id:ROUTE_PATHS.upcoming,
    onBtnClick: visitPage,
  },
  // {
  //   index: 4,
  //   heading: t("kyc4"),
  //   subheading: t("update now"),
  //   id:ROUTE_PATHS.upcoming,
  //   onBtnClick: visitPage,
  // },
];
