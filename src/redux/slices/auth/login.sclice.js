import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggleLoginPopup: false,
  loginLoader: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    handleLoginPopup: (state, actions) => {
      return {
        ...state,
        toggleLoginPopup: actions?.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchUserInformationThunk.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       userInformationData: action.payload?.getUser,
    //     };
    //   })
    //   .addCase(signUpNewUser.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       userInformationData: action.payload,
    //       loader: false,
    //     };
    //   })
    //   .addCase(fetchUserInformationThunk.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       userInformationData: action.payload?.getUser,
    //     };
    //   });
  },
});

export const { handleLoginPopup } = loginSlice.actions;
export default loginSlice.reducer;
