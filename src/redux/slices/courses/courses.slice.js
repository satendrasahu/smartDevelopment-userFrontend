import { createSlice } from '@reduxjs/toolkit'
import { fetchCoursesDataThunk, fetchQuestionAnswerDataThunk, fetchTopicsDataThunk } from '../../thunks/courses/courses.thunk'
const initialState = {
    coursesData :null,
    topicsData:null,
    questionAnswerData:null,
    loader :false
}

const coursesSlice = createSlice({
    name :"coursesSlice",
    initialState,
    reducers :{
        setCoursesData : (state, actions) => {
            return {
              ...state,
              coursesData: actions?.payload
            }
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCoursesDataThunk.fulfilled, (state, action) => {
            return {
              ...state,
              coursesData: action.payload,
              loader: false
            }
          })
          .addCase(fetchCoursesDataThunk.pending, (state, action) => {
            return {
              ...state,
              loader: true
            }
          })
          .addCase(fetchCoursesDataThunk.rejected, (state, action) => {
            return {
              ...state,
              coursesData: action.payload,
              loader: false
            }
          })
          .addCase(fetchTopicsDataThunk.fulfilled, (state, action) => {
            return {
              ...state,
              topicsData: action.payload,
              loader: false
            }
          })
          .addCase(fetchTopicsDataThunk.pending, (state, action) => {
            return {
              ...state,
              loader: true
            }
          })
          .addCase(fetchTopicsDataThunk.rejected, (state, action) => {
            return {
              ...state,
              topicsData: action.payload,
              loader: false
            }
          })
          .addCase(fetchQuestionAnswerDataThunk.fulfilled, (state, action) => {
            return {
              ...state,
              questionAnswerData: action.payload,
              loader: false
            }
          })
          .addCase(fetchQuestionAnswerDataThunk.pending, (state, action) => {
            return {
              ...state,
              loader: true
            }
          })
          .addCase(fetchQuestionAnswerDataThunk.rejected, (state, action) => {
            return {
              ...state,
              questionAnswerData: action.payload,
              loader: false
            }
          })
      }
})

export const  {setCoursesData} = coursesSlice.actions
export default coursesSlice.reducer