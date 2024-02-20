import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import jobReducer from "./job";

const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer
    }
});

export default store;