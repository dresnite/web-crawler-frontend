import { FormEvent, useState } from "react";
import useInput from "./useInput";
import { requestSignup } from "../services/api";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUsername } from "../store/user";

export default function useSignup() {
    const usernameInput = useInput();
    const passwordInput = useInput();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();

    async function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await requestSignup(usernameInput.value, passwordInput.value);
            if(response.status === 201) {
                console.log(`Successfully created the user ${usernameInput.value}`);
                router.replace("/dashboard");

                dispatch(setUsername({
                    username: usernameInput.value
                }));
            } else {
                console.log(`Failed to register user ${usernameInput.value}, status: ${response.status}`);
                setError("Failed to register")

                dispatch(setUsername({
                    username: ""
                }));
            }
        } catch {
            setError("Something bad happened on our end 😭");
            console.log(`Failed to register user ${usernameInput.value}, an error was thrown!`);

            dispatch(setUsername({
                username: ""
            }));
        }
        

        setLoading(false);
    }

    return { handleUsername: usernameInput.handleOnChange, handlePassword: passwordInput.handleOnChange, handleSignup, isLoading, error }
}