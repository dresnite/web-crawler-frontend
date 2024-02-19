"use client";

import PurpleContainer from "../components/PurpleContainer";
import Navbar from "../components/dashboard/Navbar";
import useUsername from "../hooks/useUsername";

export default function DashboardPage() {
    const username = useUsername();

    return (
        <PurpleContainer centered={false}>
            <div className="flex flex-col flex-grow">
                <Navbar />

                <div className="mt-10 mx-10 text-white text-2xl">Welcome back, {username}</div>
            </div>
            
        </PurpleContainer>
    );
}