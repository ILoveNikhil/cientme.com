import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/UserReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
export const server = "http://localhost:8080";
