import { useDispatch, useSelector } from "react-redux";
import { updateCategoriesThunk } from "../../../../../../../redux/thunks/profile/portfolio.thunk";

const useCategories = () => {
  const dispatch = useDispatch();
  const { categoryData, categoryLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(categoryData || []), values?.aboutMeText] };
    dispatch(updateCategoriesThunk(payload));
  };
  return { handleSubmitHandler, categoryData, categoryLoader };
};

export default useCategories;
