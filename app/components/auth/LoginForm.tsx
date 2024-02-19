"use client";

import Link from "next/link";
import AuthLogo from "./AuthLogo";
import useLogin from "@/app/hooks/useLogin";
import Spinner from "../Spinner";

export default function LoginForm() {
    const { handleUsername, handlePassword, handleLogin, isLoading, error } = useLogin();

    return (
        <form onSubmit={handleLogin} className="auth-form">
            <AuthLogo text="Sign in" error={error} />
            <input type="text" className="auth-input" placeholder="username123" onChange={handleUsername} />
            <input type="password" className="auth-input" placeholder="*********" onChange={handlePassword} />
            <button className="auth-button" disabled={isLoading}>{isLoading ? <Spinner/> : "Sign in"}</button>
            <span className="text-textGray mt-8 text-sm">Don't have an account? <Link href="/signup" className="text-bgPurple">Register here</Link></span>
        </form>
    );
}