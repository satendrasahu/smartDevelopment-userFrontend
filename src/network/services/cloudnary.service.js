import { axiosInstanceService } from "../axios";
import { methods } from "../axios/constant";

export const uploadSkillsService = async (payload) => {
    return await  axiosInstanceService(methods.POST, 'https://api.cloudinary.com/v1_1/sahu-s-theclassic/image/upload',payload,{
        // message:"custom message"
    })
};