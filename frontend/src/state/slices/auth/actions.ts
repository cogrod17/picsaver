import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../user";
import { request } from "api";

export interface LoginModel {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginModel, { dispatch }) => {
    const res = await request({
      method: "post",
      endpoint: "auth/login/",
      body: data,
    });
    const { user, ...tokens } = res.data;
    dispatch(setUser(user));
    return tokens;
  }
);
