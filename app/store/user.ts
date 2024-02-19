import { createSlice } from "@reduxjs/toolkit";
import UserReducerState from "../interfaces/UserReducerState";

const initialState: UserReducerState = {
    username: ""
};

const { reducer, actions } = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername(state, action) {
            state.username = action.payload.username;
        }
    }
});

export const { setUsername } = actions;

export default reducer;