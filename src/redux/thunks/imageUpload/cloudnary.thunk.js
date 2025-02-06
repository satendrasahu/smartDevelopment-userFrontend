import { createAsyncThunk } from "@reduxjs/toolkit"
import { uploadSkillsService } from "../../../network/services/cloudnary.service"

export const uploadCloudnaryImageThunk = createAsyncThunk('upload/profileImage', async (payload,thunkApi) => {
    try {
      const res = await uploadSkillsService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
