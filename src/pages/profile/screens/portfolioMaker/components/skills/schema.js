import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    color: "",
    icon: "",
    skillName: "",
    description: "",
    accentColor: "",
  };
};

export const skillsSchema = (t) => {
  return Yup.object().shape({
    skillName: Yup.string().required(
      t("isRequired", { text: t("skillName") })
    ),
  });
};
