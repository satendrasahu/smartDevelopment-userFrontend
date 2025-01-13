import { useDispatch, useSelector } from "react-redux";
import { updateShortInfoThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useShortInfo = () => {
  const dispatch = useDispatch()
  const { shortInforData, shortInfoLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = {...values}
    dispatch(updateShortInfoThunk(payload))
    
  };
  return { handleSubmitHandler, shortInforData, shortInfoLoader };
};

export default useShortInfo;
