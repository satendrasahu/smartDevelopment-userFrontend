import * as Yup from "yup";
export const initialValues = {
  achievements:"",
}

// (responsibilitiesData) => ({
//   achievements:responsibilitiesData||"",
// });

export const resAchievementsSchema = (t) => {
  return Yup.object().shape({
    achievements: Yup.string().required(
      t("isRequired", { text: t("achievements") })
    ),
  });


};
