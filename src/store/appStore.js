import { configureStore } from "@reduxjs/toolkit"
import users from "./slices/users"

const appStore = configureStore({
    reducer: {
        users: users
    }
});

export default appStore;