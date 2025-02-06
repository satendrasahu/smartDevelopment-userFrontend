import { useDispatch, useSelector } from "react-redux";
import { updateSkillsThunk } from "../../../../../../../redux/thunks/profile/portfolio.thunk";

const useSkills = () => {
  const dispatch = useDispatch();
  const { skillsData, skillsLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {

    console.log("--",values)
    const payload = { aboutMeText: [...(skillsData || []), values?.aboutMeText] };
    dispatch(updateSkillsThunk(payload));
  };
  return { handleSubmitHandler, skillsData, skillsLoader };
};

export default useSkills;
