import { useDispatch, useSelector } from "react-redux";
import { updateContactsThunk } from "../../../../../../../redux/thunks/profile/portfolio.thunk";

const useContacts = () => {
  const dispatch = useDispatch();
  const { projectsData, projectsLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {
    const payload = { aboutMeText: [...(projectsData || []), values?.aboutMeText] };
    dispatch(updateContactsThunk(payload));
  };
  return { handleSubmitHandler, projectsData, projectsLoader };
};

export default useContacts;
