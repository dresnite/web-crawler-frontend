import { useSelector } from "react-redux";
import GlobalState from "../interfaces/GlobalState";

export default function useUserId() {
    const username = useSelector((state: GlobalState) => state.user.userId);

    return username;
}