import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserProfileThunk = createAsyncThunk(
	'updateUserProfilePic',
	async (payload, thunkApi) => {
		try {
			// const result = await updateUserProfilePicService(payload);
			return ""//result;
		} catch (error) {
			// return thunkApi.rejectWithValue(error[0].description);
		}
	}
);
