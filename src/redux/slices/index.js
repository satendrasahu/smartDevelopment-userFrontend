import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./home/home.slice";
import layoutSlice from "./layout/layout.slice";
import loginSclice from "./auth/login.sclice";
import registerSlice from "./auth/register.slice";
import coursesSlice from "./courses/courses.slice";
import profilePicSlice from "./profile/profilePic.slice"

export const rootReducer = combineReducers({
  home :homeSlice,
  layout :layoutSlice,
  login :loginSclice,
  register:registerSlice,
  courses: coursesSlice,
  profilePic:profilePicSlice,
  })