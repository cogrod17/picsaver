import { UserModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initalUserState: UserModel = {
  error: null,
  loading: false,
  data: { id: null, username: null, email: null },
};

type UserDataModel = {
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
