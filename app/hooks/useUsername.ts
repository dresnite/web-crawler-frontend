import { useSelector } from "react-redux";
import GlobalState from "../interfaces/GlobalState";

export default function useUsername() {
    const username = useSelector((state: GlobalState) => state.user.username);

    return username;
}