import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataThunk = createAsyncThunk('fetch/cms', async (thunkApi) => {
    try {
      const res = await getAllCms()
      return cms
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  