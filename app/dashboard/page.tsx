"use client";

import PurpleContainer from "../components/PurpleContainer";
import Jobs from "../components/dashboard/Jobs";
import Navbar from "../components/dashboard/Navbar";
import useUsernameCheck from "../hooks/useUsernameCheck";

export default function DashboardPage() {
    useUsernameCheck();
    
    return (
        <PurpleContainer centered={false}>
            <div className="flex flex-col flex-grow container mx-auto">
                <Navbar />
                <Jobs />
            </div>
            
        </PurpleContainer>
    );
}