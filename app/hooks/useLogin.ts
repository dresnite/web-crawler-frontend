import { useRouter } from "next/navigation";
import { requestLogin } from "../services/api";
import useInput from "./useInput";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData, clearUserData } from "../store/user";

export default function useLogin() {
    const usernameInput = useInput();
    const passwordInput = useInput();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await requestLogin(usernameInput.value, passwordInput.value);
            if(response.status === 200) {
                console.log(`Successfully logged the user ${usernameInput.value}`);
                router.replace("/dashboard");

                const body = await response.json();

                dispatch(setUserData({
                    username: usernameInput.value,
                    userId: body.user._id
                }));
            } else {
                setError("Wrong password or username.");
                console.log(`Failed to log in user ${usernameInput.value}, status: ${response.status}`);
                
                dispatch(clearUserData({}));
            }
        } catch {
            setError("Something happened on our end :(");
            console.log(`Failed to log in user ${usernameInput.value}, an error was thrown!`);
            
            dispatch(clearUserData({}));
        }
        

        setLoading(false);
    }

    return { handleUsername: usernameInput.handleOnChange, handlePassword: passwordInput.handleOnChange, handleLogin, isLoading, error }
}