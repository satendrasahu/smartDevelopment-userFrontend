import { axiosInstanceService } from "../axios";
import { methods } from "../axios/constant";

export const updateShortInfoService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/shortInfo',payload,{
        // message:"custom message"
    })
};
