import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    projectName:educationData || "",
    description :"",
    projectLink:"",
    domainName:"",
    duration :"",
    skillTags :[],
    responsibilities:[]
  };
};

export const projectsSchema = (t) => {
  return Yup.object().shape({
    projectName: Yup.string().required(
      t("isRequired", { text: t("projectName") })
    ),
    duration: Yup.string().required(
      t("isRequired", { text: t("duration") })
    ),
    description: Yup.string().required(
      t("isRequired", { text: t("description") })
    ),
  });
};
