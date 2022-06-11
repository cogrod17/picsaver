import { configureStore } from "@reduxjs/toolkit";
import { userSlice, authSlice } from "../slices";
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AuthModel, UserModel } from "models/redux-models";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: [thunk],
  devTools: true,
});

// export type RootState = ReturnType<typeof store.getState>;
export interface RootState {
  auth: AuthModel;
  user: UserModel;
}
export type AppDispatch = typeof store.dispatch;
