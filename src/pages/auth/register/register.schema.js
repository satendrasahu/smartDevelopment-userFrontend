import * as Yup from "yup";
export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNum: "",
  password: "",
  confirmPassword: "",
};

export const registerSchema = (t) => {
  return Yup.object().shape({
    firstName: Yup.string().required(t("isRequired", { text: t("firstName") })),
    lastName: Yup.string().required(t("isRequired", { text: t("lastName") })),
    email: Yup.string().required(t("isRequired", { text: t("email") })),
    // mobileNum: Yup.string().required(t('isRequired',{text :t('mobileNum')})),
    password: Yup.string().required(t("isRequired", { text: t("password") })),
    confirmPassword: Yup.string().required(t("isRequired", { text: t("confirmPassword") })),
  });
};
