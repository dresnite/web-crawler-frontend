import { useRouter } from "next/navigation";
import { requestLogout } from "../services/api";
import { useDispatch } from "react-redux";
import { clearUserData, setUserData } from "../store/user";

export default function useLogout() {
    const router = useRouter();
    const dispatch = useDispatch();

    async function logout() {
        try {
            const response = await requestLogout();

            if(response.status === 200) {
                console.log("Successfully logged out");
                
                dispatch(clearUserData({}));

                router.replace("/");
            } else {
                console.log(`Failed to log out, status: ${response.status}`);
            }
        } catch {
            console.log("Something bad happened on our end while you were logging out");
        }
    }

    return logout;
}