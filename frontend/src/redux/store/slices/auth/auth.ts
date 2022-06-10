import { AuthModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initAuth: AuthModel = {
  refresh: null,
  access: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    setTokens: (state, action: PayloadAction<AuthModel>) => {
      state = action?.payload;
    },
  },
});
