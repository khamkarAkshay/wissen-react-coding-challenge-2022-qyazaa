import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import usersReducer from "./users/user.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
