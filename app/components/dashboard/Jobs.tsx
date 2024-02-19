import useUsername from "@/app/hooks/useUsername";

export default function Jobs() {
    const username = useUsername();
    return (
        <div className="dashboard-container mt-2 flex-col">
            <p className="text-lg">Welcome back, @{username}</p>

            <div className="flex items-center justify-center md:justify-between md:items-center mt-10">
                <h1 className="font-bold text-xl">Your Crawling Jobs</h1>
                <button className="purple-button hidden md:block">Create new job</button>
            </div>
        </div>
    );
}