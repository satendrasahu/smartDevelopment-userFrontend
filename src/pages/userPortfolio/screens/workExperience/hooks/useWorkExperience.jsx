import { useTranslation } from "react-i18next";
const useWorkExperience = () => {
  const { t } = useTranslation();
  const experienceData = [
    {
      index: 1,
      desigNationName: "Solution Engineer",
      technologyName: "MERN + NEXT",
      designationTechName:
        "Solution Engineer | Full Stack Developer (MERN + Next.js)",
      companyName: "Birla Institute of Technology Mesra, Ranchi(Jharkhand).",
      duration: "2018-2021",
      companyWebsite: "https://www.bitmesra.ac.in/",
    },
    {
      index: 2,
      desigNationName: "MERN Stack devloper",
      technologyName: "MERN + NEXT",
      designationTechName: "Full Stack Developer (MERN + Next.js)",
      companyName:
        "Govt. Nirbhay Singh Patel Science College (DAVV), Indore(Madhya Pradesh).",
      duration: "2015-2018",
      companyWebsite: "https://gnspsc.ac.in/",
    },
  ];
  return { t, experienceData };
};

export default useWorkExperience;
