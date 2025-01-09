import { errorHandler } from "../handlers/error.handler";
import { responseSuccessHandler } from "../handlers/response.handler";

export const setupResponseInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => errorHandler(error)
  );
};
