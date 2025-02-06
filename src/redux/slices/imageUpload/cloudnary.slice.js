import { createSlice } from "@reduxjs/toolkit";
import { uploadCloudnaryImageThunk } from "../../thunks/imageUpload/cloudnary.thunk";
const initialState = {
  uploadProfileImageData: null,
  uploadProfileImageLoader: false,
};

const cloudnaryImageUploadSlice = createSlice({
  name: "cloudnaryImageUploadSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadCloudnaryImageThunk.fulfilled, (state, action) => {
        return {
          ...state,
          uploadProfileImageData: action.payload,
          uploadProfileImageLoader: false,
        };
      })
      .addCase(uploadCloudnaryImageThunk.pending, (state) => {
        return {
          ...state,
          uploadProfileImageData: null,
          uploadProfileImageLoader: false,
        };
      })
      .addCase(uploadCloudnaryImageThunk.rejected, (state, action) => {
        return {
          ...state,
          uploadProfileImageData: action.payload,
          uploadProfileImageLoader: false,
        };
      });
  },
});

// export const { } = cloudnaryImageUploadSlice.actions;
export default cloudnaryImageUploadSlice.reducer;
