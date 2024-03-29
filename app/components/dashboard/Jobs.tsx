import useUsername from "@/app/hooks/useUsername";
import Job from "./Job";
import EmptyJob from "./EmptyJob";
import useJobs from "@/app/hooks/useJobs";
import CreateJob from "./CreateJob";
import useJobCreationSection from "@/app/hooks/useCreateJobSection";
import { useSelector } from "react-redux";
import GlobalState from "@/app/interfaces/GlobalState";

export default function Jobs() {
    const username = useUsername();
    const { jobs, isLoading, handleRefresh, getRefreshText, getEmptyText } = useJobs();
    const jobCreationSection = useJobCreationSection();
    const parentJobId = useSelector((state: GlobalState) => state.job.parentJobId);

    return (
        <div className="dashboard-container mt-2 flex-col flex-grow max-w-full mb-10">
            <p className="text-lg text-center mt-5">Welcome back, <span className="font-bold text-bgPurple">@{username}</span>.</p>

            <div className="flex items-center justify-center md:justify-between md:items-center mt-10">
                <h1 className="font-bold text-xl">Your Crawling Jobs</h1>
                <div className="hidden md:flex md:gap-4">
                <button className="purple-button" onClick={handleRefresh} disabled={isLoading}>{getRefreshText()}</button>
                <button className="purple-button hidden md:block" onClick={jobCreationSection.toggleVisibility}>Create new job</button>
                </div>
            </div>

            <div>
                {jobCreationSection.isVisible && <CreateJob />}
                {jobs.length === 0 && <EmptyJob getText={getEmptyText}/>}
                {jobs.length > 0 && jobs.toReversed().map((job, index) => {
                    return <Job parentId={parentJobId} jobId={job.id!} key={index} seed={job.seed} status={job.status} links={job.linksFound} />
                })}
            </div>
        </div>
    );
}