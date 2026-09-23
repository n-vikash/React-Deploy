import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/UserSlice";

export const Store = configureStore({
  reducer: {
    user: UserReducer,
  },
});


