import React from "react";
import {
  Phone,
  Email,
  LinkedIn,
  Business,
  Work,
  YouTube,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const useContactHook = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      href: "tel:+91-8517959992",
      icon: <Phone fontSize="large" />,
      text: "+91-8517959992",
    },
    {
      href: "mailto:satendrasahu@gmail.com",
      icon: <Email fontSize="large" />,
      text: "satendrasahu@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/satendra-sahu/",
      icon: <LinkedIn fontSize="large" />,
      text: "LinkedIn",
    },

    {
      href: "https://www.naukri.com/",
      icon: <Business fontSize="large" />,
      text: "Naukri",
    },
    {
      href: "https://www.indeed.com/",
      icon: <Work fontSize="large" />,
      text: "Indeed",
    },
    {
      href: "https://youtube.com/yourchannel",
      icon: <YouTube fontSize="large" />,
      text: "Watch My Intro Video",
    },
  ];

  const QestionAnswer = [
    {
      question: t("howdoStartProjectWithYou"),
      answer: t("simplyReachOutTontactOptionsAbove"),
    },
    {
      question: t("whatAreYourWorkingHours"),
      answer: t("imAvailable"),
    },
  ];

  const contactButton = [
    {
      href: "/cv.pdf",
      label: t("hireMe"),
      variant: "contained",
    },
    {
      href: "/resume.pdf",
      label: t("downloadResume"),
      variant: "outlined",
    },
  ];

  return {
    t,
    contactInfo,
    QestionAnswer,
    contactButton,
  };
};

export default useContactHook;
