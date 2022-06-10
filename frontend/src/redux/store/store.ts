import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice, userSlice } from "./slices";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const reducers = {
//   auth: authSlice.reducer,
//   user: userSlice.reducer,
// };

// export const appReducer = combineReducers(reducers);
