import * as Yup from "yup";
export const initialValues = {};

export const loginSchema = (t) => {
  return Yup.object().shape({
    userName: Yup.string().required("usernameOrEmailIsRequired"),
    password: Yup.string().required("passwordIsRequired"),
  });
};
