import { AuthModel } from "models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./actions";
import { checkSession } from "utils/session";

const initAuth: AuthModel = {
  loading: false,
  error: null,
  data: {
    refresh: checkSession()?.refresh || null,
    access: checkSession()?.access || null,
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
        state.loading = false;
        state.error = "There was an error";
      });
  },
});

export const { reducer: authReducer } = authSlice;
export const { setTokens } = authSlice.actions;
