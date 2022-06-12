import { createAsyncThunk } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";
import { setUser } from "../user";

export interface LoginModel {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginModel, { dispatch }) => {
    await wait(3000);
    dispatch(setUser({ id: 17, username: "cole", email: "amdaf" }));
    return { refresh: "3qewgasdiovn", access: "qiounbvapoisdu" };
  }
);
