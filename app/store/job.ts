import { createSlice } from "@reduxjs/toolkit";
import JobReducerState from "../interfaces/JobReducerState";

const initialState: JobReducerState = {
    parentJobId: ""
};

const { reducer, actions } = createSlice({
    name: "job",
    initialState,
    reducers: {
        setParentJobId(state, action) {
            state.parentJobId = action.payload.parentId;
            console.log("sent: " + action.payload.parentId);
        }
    }
});

export const { setParentJobId } = actions;

export default reducer;