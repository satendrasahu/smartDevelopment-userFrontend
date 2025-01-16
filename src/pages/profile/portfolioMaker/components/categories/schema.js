import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    categoryName:educationData || "",
    description :"",
    projectLink:""
  };
};

export const categorySchema = (t) => {
  return Yup.object().shape({
    categoryName: Yup.string().required(
      t("isRequired", { text: t("categoryName") })
    ),
    collageWebsite :Yup.string().required(
      t("isRequired", { text: t("collageWebsite") })
    ),
  });
};
