import { useDispatch, useSelector } from "react-redux";
import { updateResponsibilitiesThunk } from "../../../../../../../redux/thunks/profile/portfolio.thunk";

const useResponsibilitiesInfo = () => {
  const dispatch = useDispatch();
  const { responsibilitiesData, responsibilitiesLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(responsibilitiesData || []), values?.aboutMeText] };
    dispatch(updateResponsibilitiesThunk(payload));
  };
  return { handleSubmitHandler, responsibilitiesData, responsibilitiesLoader };
};

export default useResponsibilitiesInfo;
