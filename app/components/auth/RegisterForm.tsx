"use client";

import Link from "next/link";
import AuthLogo from "./AuthLogo";
import useSignup from "@/app/hooks/useSignup";
import Spinner from "../Spinner";

export default function RegisterForm() {
    const { handleUsername, handlePassword, handleSignup, isLoading, error } = useSignup();

    return (
        <form className="auth-form" onSubmit={handleSignup}>
            <AuthLogo text="Sign up" error={error} />
            <input type="text" className="auth-input" placeholder="username123" onChange={handleUsername} />
            <input type="password" className="auth-input" placeholder="*********" onChange={handlePassword} />
            <button type="submit" className="auth-button">{isLoading ? <Spinner/> : "Sign up"}</button>
            <span className="text-textGray mt-8 text-sm">Already have an account? <Link href="/" className="text-bgPurple">Log in here</Link></span>
        </form>
    );
}