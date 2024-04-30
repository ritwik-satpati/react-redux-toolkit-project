import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "./slices/users.slice";
import usersSlice from "./slices/users.slice";

const store = configureStore({
  reducer: {
    // users: usersSlice,
    users: usersSlice,
  },
});

export default store;
