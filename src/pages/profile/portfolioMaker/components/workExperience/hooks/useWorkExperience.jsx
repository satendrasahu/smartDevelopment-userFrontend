import { useDispatch, useSelector } from "react-redux";
import { updateWorkExperienceThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useWorkExperience = () => {
  const dispatch = useDispatch();
  const { workExperienceData, workExperienceLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(workExperienceData || []), values?.aboutMeText] };
    dispatch(updateWorkExperienceThunk(payload));
  };
  return { handleSubmitHandler, workExperienceData, workExperienceLoader };
};

export default useWorkExperience;
