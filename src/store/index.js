import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./reducers/UserReducer/userListSlice";
import authSlice from "./reducers/UserReducer/authSlice";

const store = configureStore({
  reducer: {
    userListState: userListSlice,
    authState: authSlice,
  },
});

export default store;
