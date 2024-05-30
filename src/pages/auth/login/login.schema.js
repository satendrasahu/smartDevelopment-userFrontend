import * as Yup from "yup";
export const initialValues = {
  userNameOrEmailOrMobile:"",
  password:""
};

export const loginSchema = (t) => {
  return Yup.object().shape({
    userNameOrEmailOrMobile: Yup.string().required(t('isRequired',{text :t('userNameOrEmail')})),
    password: Yup.string().required(t('isRequired',{text :t('password')})),
  });
};
