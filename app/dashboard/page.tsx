"use client";

import PurpleContainer from "../components/PurpleContainer";
import useUsername from "../hooks/useUsername";

export default function DashboardPage() {
    const username = useUsername();

    return (
        <PurpleContainer>
            <div className="text-white text-2xl">Welcome back, {username}</div>
        </PurpleContainer>
    );
}