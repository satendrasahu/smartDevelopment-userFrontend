import { axiosInstanceService } from "../axios";
import { methods } from "../axios/constant";

export const updateShortInfoService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/shortInfo',payload,{
        // message:"custom message"
    })
};

export const updateAboutMeService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/aboutMe',payload,{
        // message:"custom message"
    })
};




export const updateWorkExperienceService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/workExperience',payload,{
        // message:"custom message"
    })
};


export const updateEducationService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/education',payload,{
        // message:"custom message"
    })
};
