"use client";

import PurpleContainer from "../components/PurpleContainer";
import useLogout from "../hooks/useLogout";
import useUsername from "../hooks/useUsername";

export default function DashboardPage() {
    const username = useUsername();
    const logout = useLogout();

    return (
        <PurpleContainer centered={false}>
            <div className="flex flex-col flex-grow">
                <nav className="flex justify-between items-center mx-10 bg-white px-10 mt-2 py-6 rounded-3xl shadow-2xl">
                    <a href="" className="text-xl font-bold text-bgPurple uppercase">Crawler</a>
                    <button className="text-white bg-bgPurple px-4 py-3 rounded-full" onClick={logout}>Log out</button>
                </nav>

                <div className="text-white text-2xl">Welcome back, {username}</div>
            </div>
            
        </PurpleContainer>
    );
}