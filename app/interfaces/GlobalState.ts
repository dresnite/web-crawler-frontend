import JobReducerState from "./JobReducerState";
import UserReducerState from "./UserReducerState";

export default interface GlobalState {
    job: JobReducerState;
    user: UserReducerState;
}