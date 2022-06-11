import { UserModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initalUserState: UserModel = {
  id: null,
  username: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state = action.payload;
    },
  },
});
