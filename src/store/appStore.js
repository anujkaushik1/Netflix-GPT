import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import movies from "./slices/movies";
import config from './slices/config';

const appStore = configureStore({
  reducer: {
    users: users,
    movies: movies,
    config: config
  },
});

export default appStore;
