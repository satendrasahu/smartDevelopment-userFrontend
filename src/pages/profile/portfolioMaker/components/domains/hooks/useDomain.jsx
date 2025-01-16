import { useDispatch, useSelector } from "react-redux";
import { updateDomainsThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useDomain = () => {
  const dispatch = useDispatch();
  const { domainsData, domainsLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(domainsData || []), values?.aboutMeText] };
    dispatch(updateDomainsThunk(payload));
  };
  return { handleSubmitHandler, domainsData, domainsLoader };
};

export default useDomain;
