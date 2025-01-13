import { createSlice } from "@reduxjs/toolkit";
import { updateShortInfoThunk } from "../../thunks/profile/portfolio.thunk";
const initialState = {
  shortInforData: null,
  shortInfoLoader: false,
};

const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,
  reducers: {
    setshortInforData: (state, actions) => {
      return {
        ...state,
        shortInforData: actions?.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateShortInfoThunk.fulfilled, (state, action) => {
        return {
          ...state,
          shortInforData: action.payload,
          shortInfoLoader:false
        };
      })
      .addCase(updateShortInfoThunk.pending, (state, action) => {
        return {
          ...state,
          shortInforData:null,
          shortInfoLoader:true
        };
      })
      .addCase(updateShortInfoThunk.rejected, (state, action) => {
        return {
          ...state,
          shortInforData: action.payload,
          shortInfoLoader:false
        };
      })
  },
});

export const { setshortInforData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
