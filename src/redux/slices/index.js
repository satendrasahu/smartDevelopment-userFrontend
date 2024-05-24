import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./home/home.slice";
import layoutSlice from "./layout/layout.slice";
import loginSclice from "./auth/login.sclice";
import registerSlice from "./auth/register.slice";

export const rootReducer = combineReducers({
  home :homeSlice,
  layout :layoutSlice,
  login :loginSclice,
  register:registerSlice
  })