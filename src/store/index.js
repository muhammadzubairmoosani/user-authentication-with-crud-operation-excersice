import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./reducers/UserReducer/userListSlice";

const store = configureStore({
  reducer: {
    userState: userListSlice,
  },
});

export default store;
