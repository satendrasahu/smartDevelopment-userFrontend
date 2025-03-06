import { faMobileScreen, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const useCategoryHook = () => {
  const {t} = useTranslation()
  const categoriesData = [
    {
      id: 1,
      icon: faMobileScreen,
      title: "Full Stack Development",
      description:
        "I have worked extensively on mobile app development using React Native and Flutter.",
      projectLink: "/projects/mobile-development",
    },
    {
      id: 2,
      icon: faGlobe,
      title: "Web Development",
      description:
        "Expert in full-stack development with React, Node.js, and MongoDB.",
      projectLink: "/projects/web-development",
    },
  ];

  return {
    t,
    categoriesData,
  };
};

export default useCategoryHook;
