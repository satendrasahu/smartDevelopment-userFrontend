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


export const updateResponsibilitiesService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/responsibilities',payload,{
        // message:"custom message"
    })
};

export const updateAchieveMentsService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/achievements',payload,{
        // message:"custom message"
    })
};


export const updateCategoriesService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/category',payload,{
        // message:"custom message"
    })
};

export const updateDomainsService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/domains',payload,{
        // message:"custom message"
    })
};

export const updateProjectsService = async (payload) => {
    return await  axiosInstanceService(methods.PATCH, '/profile/portfolio/projects',payload,{
        // message:"custom message"
    })
};



