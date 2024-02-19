import { useSelector } from "react-redux";
import UserReducerState from "../interfaces/UserReducerState";

export default function useUsername() {
    const username = useSelector((state: UserReducerState) => state.username);

    return username;
}