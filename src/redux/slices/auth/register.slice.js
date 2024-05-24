import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleRegisterPopup: false,
  registerLoader: false,
};

const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    handleRegisterPopup: (state, actions) => {
      return {
        ...state,
        toggleRegisterPopup: actions?.payload,
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

export const { handleRegisterPopup } = registerSlice.actions;
export default registerSlice.reducer;
