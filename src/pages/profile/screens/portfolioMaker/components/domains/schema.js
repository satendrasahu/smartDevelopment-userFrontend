import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    domainName:educationData || "",
    description :"",
    projectLink:""
  };
};

export const domainsSchema = (t) => {
  return Yup.object().shape({
    domainName: Yup.string().required(
      t("isRequired", { text: t("domainName") })
    ),
  });
};
