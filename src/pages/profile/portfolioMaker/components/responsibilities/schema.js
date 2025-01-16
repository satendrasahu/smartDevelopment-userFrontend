import * as Yup from "yup";
export const initialValues = {
  responsibilities:"",
}

// (responsibilitiesData) => ({
//   responsibilities:responsibilitiesData||"",
// });

export const responsibilitiesSchema = (t) => {
  return Yup.object().shape({
    responsibilities: Yup.string().required(
      t("isRequired", { text: t("responsibilities") })
    ),
  });


};
