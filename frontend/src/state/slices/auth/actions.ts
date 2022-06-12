import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../user";

import axios from "axios";

const API_URL = "http://localhost:8000";

type ServerData = {};

interface RequestModel {
  method: "get" | "post" | "patch" | "put" | "delete";
  endpoint: string;
  body?: {};
}

const request = async ({ method, endpoint, body }: RequestModel) => {
  return await axios[method](`${API_URL}/${endpoint}`, { ...body });
};

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
