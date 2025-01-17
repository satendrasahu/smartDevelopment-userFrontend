import { useDispatch, useSelector } from "react-redux";
import { updateProjectsThunk } from "../../../../../../redux/thunks/profile/portfolio.thunk";

const useProjects = () => {
  const dispatch = useDispatch();
  const { projectsData, projectsLoader } = useSelector(
    (state) => state?.portfolio
  );
  const handleSubmitHandler = (values) => {

    console.log("--",values)
    const payload = { aboutMeText: [...(projectsData || []), values?.aboutMeText] };
    dispatch(updateProjectsThunk(payload));
  };
  return { handleSubmitHandler, projectsData, projectsLoader };
};

export default useProjects;
