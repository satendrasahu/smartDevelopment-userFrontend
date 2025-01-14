import { createSlice } from "@reduxjs/toolkit";
import { updateAboutMeThunk, updateEducationThunk, updateShortInfoThunk, updateWorkExperienceThunk } from "../../thunks/profile/portfolio.thunk";
const initialState = {
  shortInfoData: null,
  shortInfoLoader: false,
  aboutMeData : null,
  aboutMeLoader : false,
  workExperienceData : null,
  workExperienceLoader : false,
  educationData:null,
  educationLoader:false
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
          shortInfoLoader:false
        };
      })
      .addCase(updateShortInfoThunk.pending, (state, action) => {
        return {
          ...state,
          shortInfoData:null,
          shortInfoLoader:true
        };
      })
      .addCase(updateShortInfoThunk.rejected, (state, action) => {
        return {
          ...state,
          shortInfoData: action.payload,
          shortInfoLoader:false
        };
      })

      .addCase(updateAboutMeThunk.fulfilled, (state, action) => {
        return {
          ...state,
          aboutMeData: action.payload,
          aboutMeLoader:false
        };
      })
      .addCase(updateAboutMeThunk.pending, (state, action) => {
        return {
          ...state,
          aboutMeData:null,
          aboutMeLoader:true
        };
      })
      .addCase(updateAboutMeThunk.rejected, (state, action) => {
        return {
          ...state,
          aboutMeData: action.payload,
          aboutMeLoader:false
        };
      })

      .addCase(updateWorkExperienceThunk.fulfilled, (state, action) => {
        return {
          ...state,
          workExperienceData: action.payload,
          workExperienceLoader:false
        };
      })
      .addCase(updateWorkExperienceThunk.pending, (state, action) => {
        return {
          ...state,
          workExperienceData:null,
          workExperienceLoader:true
        };
      })
      .addCase(updateWorkExperienceThunk.rejected, (state, action) => {
        return {
          ...state,
          workExperienceData: action.payload,
          workExperienceLoader:false
        };
      })

      .addCase(updateEducationThunk.fulfilled, (state, action) => {
        return {
          ...state,
          educationData: action.payload,
          educationLoader:false
        };
      })
      .addCase(updateEducationThunk.pending, (state, action) => {
        return {
          ...state,
          educationData:null,
          educationLoader:true
        };
      })
      .addCase(updateEducationThunk.rejected, (state, action) => {
        return {
          ...state,
          educationData: action.payload,
          educationLoader:false
        };
      })
      
  },
});

export const { setshortInfoData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
