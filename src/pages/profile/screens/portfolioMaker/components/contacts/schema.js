import * as Yup from "yup";
export const initialValues = (educationData) => {
  return {
    contactName:educationData || "",
    contactType :"",
    contactLink:"",
    contactIcon :""
  };
};

export const contactsSchema = (t) => {
  return Yup.object().shape({
    contactName: Yup.string().required(
      t("isRequired", { text: t("contactName") })
    ),
   
  });
};
