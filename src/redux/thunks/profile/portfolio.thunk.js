import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateShortInfoService } from "../../../network/services/portfolio.service"

export const updateShortInfoThunk = createAsyncThunk('update/shortInfo', async (payload,thunkApi) => {
    try {
      const res = await updateShortInfoService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  