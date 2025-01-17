import { createSlice } from "@reduxjs/toolkit";
import {
  updateAboutMeThunk,
  updateAchieveMentsThunk,
  updateCategoriesThunk,
  updateContactsThunk,
  updateDomainsThunk,
  updateEducationThunk,
  updateProjectsThunk,
  updateResponsibilitiesThunk,
  updateShortInfoThunk,
  updateSkillsThunk,
  updateWorkExperienceThunk,
} from "../../thunks/profile/portfolio.thunk";
const initialState = {
  shortInfoData: null,
  shortInfoLoader: false,
  aboutMeData: null,
  aboutMeLoader: false,
  workExperienceData: null,
  workExperienceLoader: false,
  educationData: null,
  educationLoader: false,
  responsibilitiesData: null,
  responsibilitiesLoader: false,
  achieveMentsData: null,
  achieveMentsLoader: false,
  categoryData: null,
  categoryLoader: false,
  domainsData: null,
  domainsLoader: false,
  projectsData: null,
  projectsLoader: false,
  contactsData: null,
  contactLoader: false,
  skillsData : null,
  skillsLoader:false
};

const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,
  reducers: {
    setshortInfoData: (state, actions) => {
      return {
        ...state,
        shortInfoData: actions?.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateShortInfoThunk.fulfilled, (state, action) => {
        return {
          ...state,
          shortInfoData: action.payload,
          shortInfoLoader: false,
        };
      })
      .addCase(updateShortInfoThunk.pending, (state, action) => {
        return {
          ...state,
          shortInfoData: null,
          shortInfoLoader: true,
        };
      })
      .addCase(updateShortInfoThunk.rejected, (state, action) => {
        return {
          ...state,
          shortInfoData: action.payload,
          shortInfoLoader: false,
        };
      })

      .addCase(updateAboutMeThunk.fulfilled, (state, action) => {
        return {
          ...state,
          aboutMeData: action.payload,
          aboutMeLoader: false,
        };
      })
      .addCase(updateAboutMeThunk.pending, (state, action) => {
        return {
          ...state,
          aboutMeData: null,
          aboutMeLoader: true,
        };
      })
      .addCase(updateAboutMeThunk.rejected, (state, action) => {
        return {
          ...state,
          aboutMeData: action.payload,
          aboutMeLoader: false,
        };
      })

      .addCase(updateWorkExperienceThunk.fulfilled, (state, action) => {
        return {
          ...state,
          workExperienceData: action.payload,
          workExperienceLoader: false,
        };
      })
      .addCase(updateWorkExperienceThunk.pending, (state, action) => {
        return {
          ...state,
          workExperienceData: null,
          workExperienceLoader: true,
        };
      })
      .addCase(updateWorkExperienceThunk.rejected, (state, action) => {
        return {
          ...state,
          workExperienceData: action.payload,
          workExperienceLoader: false,
        };
      })

      .addCase(updateEducationThunk.fulfilled, (state, action) => {
        return {
          ...state,
          educationData: action.payload,
          educationLoader: false,
        };
      })
      .addCase(updateEducationThunk.pending, (state, action) => {
        return {
          ...state,
          educationData: null,
          educationLoader: true,
        };
      })
      .addCase(updateEducationThunk.rejected, (state, action) => {
        return {
          ...state,
          educationData: action.payload,
          educationLoader: false,
        };
      })

      .addCase(updateResponsibilitiesThunk.fulfilled, (state, action) => {
        return {
          ...state,
          responsibilitiesData: action.payload,
          responsibilitiesLoader: false,
        };
      })
      .addCase(updateResponsibilitiesThunk.pending, (state, action) => {
        return {
          ...state,
          responsibilitiesData: null,
          responsibilitiesLoader: true,
        };
      })
      .addCase(updateResponsibilitiesThunk.rejected, (state, action) => {
        return {
          ...state,
          responsibilitiesData: action.payload,
          responsibilitiesLoader: false,
        };
      })

      .addCase(updateAchieveMentsThunk.fulfilled, (state, action) => {
        return {
          ...state,
          achieveMentsData: action.payload,
          achieveMentsLoader: false,
        };
      })
      .addCase(updateAchieveMentsThunk.pending, (state, action) => {
        return {
          ...state,
          achieveMentsData: null,
          achieveMentsLoader: true,
        };
      })
      .addCase(updateAchieveMentsThunk.rejected, (state, action) => {
        return {
          ...state,
          achieveMentsData: action.payload,
          achieveMentsLoader: false,
        };
      })

      .addCase(updateCategoriesThunk.fulfilled, (state, action) => {
        return {
          ...state,
          categoryData: action.payload,
          categoryLoader: false,
        };
      })
      .addCase(updateCategoriesThunk.pending, (state, action) => {
        return {
          ...state,
          categoryData: null,
          categoryLoader: true,
        };
      })
      .addCase(updateCategoriesThunk.rejected, (state, action) => {
        return {
          ...state,
          categoryData: action.payload,
          categoryLoader: false,
        };
      })
      .addCase(updateDomainsThunk.fulfilled, (state, action) => {
        return {
          ...state,
          domainsData: action.payload,
          domainsLoader: false,
        };
      })
      .addCase(updateDomainsThunk.pending, (state, action) => {
        return {
          ...state,
          domainsData: null,
          domainsLoader: true,
        };
      })
      .addCase(updateDomainsThunk.rejected, (state, action) => {
        return {
          ...state,
          domainsData: action.payload,
          domainsLoader: false,
        };
      })

      .addCase(updateProjectsThunk.fulfilled, (state, action) => {
        return {
          ...state,
          projectsData: action.payload,
          projectsLoader: false,
        };
      })
      .addCase(updateProjectsThunk.pending, (state, action) => {
        return {
          ...state,
          projectsData: null,
          projectsLoader: true,
        };
      })
      .addCase(updateProjectsThunk.rejected, (state, action) => {
        return {
          ...state,
          projectsData: action.payload,
          projectsLoader: false,
        };
      })

      .addCase(updateContactsThunk.fulfilled, (state, action) => {
        return {
          ...state,
          contactsData: action.payload,
          contactLoader: false,
        };
      })
      .addCase(updateContactsThunk.pending, (state, action) => {
        return {
          ...state,
          contactsData: null,
          contactLoader: true,
        };
      })
      .addCase(updateContactsThunk.rejected, (state, action) => {
        return {
          ...state,
          contactsData: action.payload,
          contactLoader: false,
        };
      })

      .addCase(updateSkillsThunk.fulfilled, (state, action) => {
        return {
          ...state,
          skillsData: action.payload,
          skillsLoader: false,
        };
      })
      .addCase(updateSkillsThunk.pending, (state, action) => {
        return {
          ...state,
          skillsData: null,
          skillsLoader: true,
        };
      })
      .addCase(updateSkillsThunk.rejected, (state, action) => {
        return {
          ...state,
          skillsData: action.payload,
          skillsLoader: false,
        };
      });
  },
});

export const { setshortInfoData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
