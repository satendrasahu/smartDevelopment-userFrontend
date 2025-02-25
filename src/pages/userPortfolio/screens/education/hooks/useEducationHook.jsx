import { useTranslation } from "react-i18next";

const useEducationHook = () => {
  const { t } = useTranslation();
  const educationData = [
    {
      index: 1,
      courseName: " Master of Computer Aplication",
      shortCourseName: "MCA",
      shortCollageName: "BIT(Mesra)",
      collageName: "Birla Institute of Technology Mesra, Ranchi(Jharkhand).",
      duration: "2018-2021",
      collageWebsite: "https://www.bitmesra.ac.in/",
    },
    {
      index: 2,
      courseName: "BatcherBachelor of Science in Computer Science",
      shortCourseName: "BSC(cse)",
      shortCollageName: "GNSPSC (Indore)",
      collageName:
        "Govt. Nirbhay Singh Patel Science College (DAVV), Indore(Madhya Pradesh).",
      duration: "2015-2018",
      collageWebsite: "https://gnspsc.ac.in/",
    },
  ];

  return {
    t,
    educationData,
  };
};

export default useEducationHook;
