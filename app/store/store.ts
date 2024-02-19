import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

const store = configureStore({
    reducer: userReducer 
});

export default store;