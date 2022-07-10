import { UserModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkSession } from "utils/session";

const initalUserState: UserModel = {
  error: null,
  loading: false,
  data: checkSession()?.user || { id: null, username: null, email: null },
};

export type UserDataModel = {
  id: number | null;
  username: string | null;
  email: string | null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: initalUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDataModel>) => {
      state.data = action?.payload;
    },
  },
});

export const { reducer: userReducer } = userSlice;
export const { setUser } = userSlice.actions;
