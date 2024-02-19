"use client";

import PurpleContainer from "../components/PurpleContainer";
import Jobs from "../components/dashboard/Jobs";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardPage() {
    return (
        <PurpleContainer centered={false}>
            <div className="flex flex-col flex-grow">
                <Navbar />

                <Jobs />
            </div>
            
        </PurpleContainer>
    );
}