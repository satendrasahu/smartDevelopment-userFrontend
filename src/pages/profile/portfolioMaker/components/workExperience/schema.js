import * as Yup from "yup";
export const initialValues = (workExperienceData) => {
  return {
    desigNationName:workExperienceData || "",
    technologyName :"",
    designationTechName:"",
    companyName :"",
    duration :"",
    companyWebsite :""
  };
};

export const workExperienceSchema = (t) => {
  return Yup.object().shape({
    desigNationName: Yup.string().required(
      t("isRequired", { text: t("desigNationName") })
    ),
    technologyName : Yup.string().required(
      t("isRequired", { text: t("technologyName") })
    ),
    designationTechName: Yup.string().required(
      t("isRequired", { text: t("designationTechName") })
    ),
    companyName:Yup.string().required(
      t("isRequired", { text: t("companyName") })
    ),
    duration : Yup.string().required(
      t("isRequired", { text: t("companyName") })
    ),
    companyWebsite :Yup.string().required(
      t("isRequired", { text: t("companyWebsite") })
    ),
  });
};
