import { configureStore } from "@reduxjs/toolkit";
import { authSlice, userSlice } from "./slices";
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
