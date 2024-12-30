import { ROUTE_PATHS } from "../routes/routesPath";

export const appDetails = {
  APP_NAME: "Amx-gamming", //"SMART-DEVELOPMENT",
  APP_TITLE: "Sahu's", //"Smart-Development"
};

export const localStorageKeys = {
  TOKEN: "authtoken",
  ROLE: "authrole",
  LANGUAGE: "language",
};

export const headerLinks = (t) => {
  const headerLinkData = [
    // {
    //   name: t('courses'),
    //   srcUrl:ROUTE_PATHS?.courses,
    // },
    // {
    //   name: t('interviewKit'),
    //   srcUrl:  ROUTE_PATHS?.interviewKit
    // },
    // {
    //   name: t('aboutUs'),
    //   srcUrl:  ROUTE_PATHS?.aboutUs
    // },
    {
      name: t("casino"),
      srcUrl: ROUTE_PATHS?.courses,
    },
    {
      name: t("sports"),
      srcUrl: ROUTE_PATHS?.comingSoon,
    },
  ];
  return headerLinkData;
};


//
export const questionAnswerType = ['text','code','image'];