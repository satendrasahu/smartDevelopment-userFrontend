import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateAboutMeService, updateAchieveMentsService, updateCategoriesService, updateContactsService, updateDomainsService, updateEducationService, updateProjectsService, updateResponsibilitiesService, updateShortInfoService, updateSkillsService, updateWorkExperienceService } from "../../../network/services/portfolio.service"

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


  export const updateResponsibilitiesThunk = createAsyncThunk('update/responsibilities', async (payload,thunkApi) => {
    try {
      const res = await updateResponsibilitiesService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })


  export const updateAchieveMentsThunk = createAsyncThunk('update/achievements', async (payload,thunkApi) => {
    try {
      const res = await updateAchieveMentsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })


  export const updateCategoriesThunk = createAsyncThunk('update/category', async (payload,thunkApi) => {
    try {
      const res = await updateCategoriesService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })


  export const updateDomainsThunk = createAsyncThunk('update/domains', async (payload,thunkApi) => {
    try {
      const res = await updateDomainsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })

  export const updateProjectsThunk = createAsyncThunk('update/projects', async (payload,thunkApi) => {
    try {
      const res = await updateProjectsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })

  export const updateContactsThunk = createAsyncThunk('update/contacts', async (payload,thunkApi) => {
    try {
      const res = await updateContactsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })


  export const updateSkillsThunk = createAsyncThunk('update/skills', async (payload,thunkApi) => {
    try {
      const res = await updateSkillsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
