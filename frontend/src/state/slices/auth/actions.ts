import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, UserDataModel } from "../user";
import { request } from "api";
import { SessionData } from "models/redux-models";

export interface LoginModel {
  username: string;
  password: string;
}

const saveSession = (data: SessionData) => {
  localStorage.setItem("session", JSON.stringify(data));
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginModel, { dispatch }) => {
    const res = await request({
      method: "post",
      endpoint: "auth/login/",
      body: data,
    });
    const { user, ...tokens } = res.data;
    saveSession(res.data);
    dispatch(setUser(user));
    return tokens;
  }
);
