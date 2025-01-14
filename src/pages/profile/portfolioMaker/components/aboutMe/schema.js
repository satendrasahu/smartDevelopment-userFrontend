import * as Yup from "yup";
export const initialValues = (aboutMeData) => ({
  aboutMeText: aboutMeData||"",
});

export const aboutMeSchema = (t) => {
  return Yup.object().shape({
    aboutMeText: Yup.string().required(
      t("isRequired", { text: t("aboutMeText") })
    ),
  });
};
