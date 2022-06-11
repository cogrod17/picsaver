import { configureStore } from "@reduxjs/toolkit";
import { authReducer, userReducer } from "../slices";
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AuthModel, UserModel } from "models/redux-models";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
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
