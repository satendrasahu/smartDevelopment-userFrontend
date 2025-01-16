import { useDispatch, useSelector } from "react-redux";
import { updateAchieveMentsThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useAchievementsInfo = () => {
  const dispatch = useDispatch();
  const { achieveMentsData, achieveMentsLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(achieveMentsData || []), values?.aboutMeText] };
    dispatch(updateAchieveMentsThunk(payload));
  };
  return { handleSubmitHandler, achieveMentsData, achieveMentsLoader };
};

export default useAchievementsInfo;
