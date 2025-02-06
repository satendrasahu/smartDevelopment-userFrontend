import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    courseName:educationData || "",
    shortCourseName :"",
    shortCollageName:"",
    collageName :"",
    duration :"",
    collageWebsite :""
  };
};

export const workExperienceSchema = (t) => {
  return Yup.object().shape({
    courseName: Yup.string().required(
      t("isRequired", { text: t("courseName") })
    ),
    shortCourseName : Yup.string().required(
      t("isRequired", { text: t("shortCourseName") })
    ),
    shortCollageName: Yup.string().required(
      t("isRequired", { text: t("shortCollageName") })
    ),
    collageName:Yup.string().required(
      t("isRequired", { text: t("collageName") })
    ),
    duration : Yup.string().required(
      t("isRequired", { text: t("companyName") })
    ),
    collageWebsite :Yup.string().required(
      t("isRequired", { text: t("collageWebsite") })
    ),
  });
};
