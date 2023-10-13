import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/UserReducer"; // Import the userSlice from the updated reducer file

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
export const server = "http://localhost:8080";
