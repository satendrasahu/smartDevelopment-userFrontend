import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateAboutMeService, updateEducationService, updateShortInfoService, updateWorkExperienceService } from "../../../network/services/portfolio.service"

export const updateShortInfoThunk = createAsyncThunk('update/shortInfo', async (payload,thunkApi) => {
    try {
      const res = await updateShortInfoService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  

  export const updateAboutMeThunk = createAsyncThunk('update/aboutMe', async (payload,thunkApi) => {
    try {
      const res = await updateAboutMeService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  

  export const updateWorkExperienceThunk = createAsyncThunk('update/WorkExperience', async (payload,thunkApi) => {
    try {
      const res = await updateWorkExperienceService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  

  export const updateEducationThunk = createAsyncThunk('update/education', async (payload,thunkApi) => {
    try {
      const res = await updateEducationService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })