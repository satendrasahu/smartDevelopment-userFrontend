import * as Yup from "yup";
export const personalInformationInitialValues = {
  firstName: "",
  lastName: "",
  userName:"",
  password: "",
  confirmPassword: "",
  mobileNum: "",
  gender:""
};

export const changePasswordInitialValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

export const personalInformationSchema = (t) => {
  return Yup.object().shape({
    firstName: Yup.string().required(t("isRequired", { text: t("firstName") })),
    lastName: Yup.string().required(t("isRequired", { text: t("lastName") })),
    userName: Yup.string().required(t("isRequired", { text: t("userName") })),
    email: Yup.string().required(t("isRequired", { text: t("email") })),
    password: Yup.string().required(t("isRequired", { text: t("password") })),
    confirmPassword: Yup.string().required(t("isRequired", { text: t("confirmPassword") })),
    mobileNum: Yup.string().required(t('isRequired',{text :t('mobileNum')})),
    // gender: Yup.string().required(t('isRequired',{text :t('gender')})),
  });
};


export const changePasswordSchema = (t) => {
  return Yup.object().shape({
    currentPassword :  Yup.string().required(t("isRequired", { text: t("currentPassword") })),
    password: Yup.string().required(t("isRequired", { text: t("password") })),
    confirmPassword: Yup.string().required(t("isRequired", { text: t("confirmPassword") })),
  });
};
