import useUsername from "@/app/hooks/useUsername";
import Job from "./Job";
import EmptyJob from "./EmptyJob";
import Status from "@/app/utils/Status";
import useJobs from "@/app/hooks/useJobs";

export default function Jobs() {
    const username = useUsername();
    const jobs = useJobs();

    return (
        <div className="dashboard-container mt-2 flex-col flex-grow mb-10">
            <p className="text-lg text-center mt-5">Welcome back, <span className="font-bold text-bgPurple">@{username}</span>.</p>

            <div className="flex items-center justify-center md:justify-between md:items-center mt-10">
                <h1 className="font-bold text-xl">Your Crawling Jobs</h1>
                <button className="purple-button hidden md:block">Create new job</button>
            </div>

            <div>
                {jobs.length === 0 && <EmptyJob />}
                {jobs.length > 0 && jobs.map((job, index) => {
                    return <Job key={index} seed={job.seed} status={job.status} />
                })}
            </div>
        </div>
    );
}