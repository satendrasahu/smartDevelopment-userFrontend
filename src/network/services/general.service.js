import { axiosInstanceService } from "../axios";
import { methods } from "../axios/constant";

export const fetchJsonPlaceHolderPostsService = async () => {
    return await  axiosInstanceService(methods.GET, '/users',{},{
        message:"custom message"
    })
};
