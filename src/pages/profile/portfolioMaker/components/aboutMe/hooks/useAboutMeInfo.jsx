import { useDispatch, useSelector } from "react-redux";
import { updateAboutMeThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useAboutMeInfo = () => {
  const dispatch = useDispatch();
  const { aboutMeData, aboutMeLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(aboutMeData || []), values?.aboutMeText] };
    dispatch(updateAboutMeThunk(payload));
  };
  return { handleSubmitHandler, aboutMeData, aboutMeLoader };
};

export default useAboutMeInfo;
