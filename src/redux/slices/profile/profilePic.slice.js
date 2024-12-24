import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfileThunk } from "../../thunks/profile/profilePic.thunk";
const initialState = {
  pdateUserProfilePicData: null,
	updateUserProfilePicLoader: false,
};

const profilePicSlice = createSlice({
  name: "profilePicSlice",
  initialState,
  reducers: {
    // handleLoginPopup: (state, actions) => {
    //   return {
    //     ...state,
    //     toggleLoginPopup: actions?.payload,
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
      return {
        ...state,
        updateUserProfilePicData: action.payload,
        updateUserProfilePicLoader: false,
      };
    })
    .addCase(updateUserProfileThunk.pending, (state, action) => {
      return {
        ...state,
        updateUserProfilePicData: null,
        updateUserProfilePicLoader: true,
      };
    })
    .addCase(updateUserProfileThunk.rejected, (state, action) => {
      return {
        ...state,
        updateUserProfilePicData: action.payload,
        updateUserProfilePicLoader: false,
      };
    });
  },
});

export const { handleLoginPopup } = profilePicSlice.actions;
export default profilePicSlice.reducer;
