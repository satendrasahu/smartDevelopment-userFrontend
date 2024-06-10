import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCoursesDataService, fetchQuestionAnswerService, fetchTopicsDataService } from '../../../network/services/courses.service'

export const fetchCoursesDataThunk = createAsyncThunk('fetch/courseData', async (thunkApi) => {
    try {
      const res = await fetchCoursesDataService()
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  
export const fetchTopicsDataThunk = createAsyncThunk('fetch/topicsData', async (payload,thunkApi) => {
    try {
      const res = await fetchTopicsDataService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  
export const fetchQuestionAnswerDataThunk = createAsyncThunk('fetch/questions-answers', async (payload,thunkApi) => {
    try {
      const res = await fetchQuestionAnswerService(payload)
      return res
    } catch (error) {
      return thunkApi.rejectWithValue(error[0].description)
    }
  })
  