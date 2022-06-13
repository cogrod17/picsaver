import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authReducer, userReducer } from "../slices";
// import { applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { AuthModel, UserModel } from "models/redux-models";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

// export type RootState = ReturnType<typeof store.getState>;
export interface RootState {
  auth: AuthModel;
  user: UserModel;
}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
