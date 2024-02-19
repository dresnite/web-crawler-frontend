import { createSlice } from "@reduxjs/toolkit";
import UserReducerState from "../interfaces/UserReducerState";

const initialState: UserReducerState = {
    username: "",
    userId: ""
};

const { reducer, actions } = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        },
        clearUserData(state, action) {
            state.username = "";
            state.userId = "";
        }
    }
});

export const { setUserData, clearUserData } = actions;

export default reducer;