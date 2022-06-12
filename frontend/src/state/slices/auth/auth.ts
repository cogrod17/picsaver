import { AuthModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, LoginModel } from "./actions";

const initAuth: AuthModel = {
  loading: false,
  error: null,
  data: {
    refresh: null,
    access: null,
  },
};

type AuthDataModel = {
  refresh: string | null;
  access: string | null;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    setTokens: (state, action: PayloadAction<AuthDataModel>) => {
      state.data = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.data = payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.error = "There was an error";
      });
  },
});

export const { reducer: authReducer } = authSlice;
export const { setTokens } = authSlice.actions;
