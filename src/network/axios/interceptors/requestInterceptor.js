import { errorHandler } from "../handlers/error.handler";
import { requestHandler } from "../handlers/request.handler";

export const setupRequestInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
      (request) => requestHandler(request),
      (error) => errorHandler(error)
    );

    
  };
  