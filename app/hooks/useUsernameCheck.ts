import { useEffect } from "react";
import useUsername from "./useUsername";
import { useRouter } from "next/navigation";

export default function useUsernameCheck() {
    const username = useUsername();
    const router = useRouter();

    useEffect(() => {
        if(!username) {
            router.replace("/");
        }
    });
}