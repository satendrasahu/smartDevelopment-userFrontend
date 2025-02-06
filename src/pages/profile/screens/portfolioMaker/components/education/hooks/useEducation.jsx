import { useDispatch, useSelector } from "react-redux";
import { updateEducationThunk } from "../../../../../../../redux/thunks/profile/portfolio.thunk";

const useEducation = () => {
  const dispatch = useDispatch();
  const { educationData, educationLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(educationData || []), values?.aboutMeText] };
    dispatch(updateEducationThunk(payload));
  };
  return { handleSubmitHandler, educationData, educationLoader };
};

export default useEducation;
