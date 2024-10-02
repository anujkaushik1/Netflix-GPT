import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import movies from "./slices/movies";

const appStore = configureStore({
  reducer: {
    users: users,
    movies: movies,
  },
});

export default appStore;
