import useCheckChildren from "@/app/hooks/useCheckChildren";
import useCopyLinks from "@/app/hooks/useCopyLinks";
import Status from "@/app/utils/Status";

interface JobProps {
    parentId: string|null;
    jobId: string;
    seed: string;
    status: Status;
    links: string[];
}

export default function Job({ parentId, jobId, seed, status, links }: JobProps) {
    const handleCheckChildrenClick = useCheckChildren(jobId);
    const handleCopy = useCopyLinks(links);

    return (
        <div className="job-container justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {status === Status.Finished && <div className="bg-green-500 text-white py-1 px-3 rounded-full">Done</div>}
                {status === Status.Working && <div className="bg-yellow-500 text-white py-1 px-3 rounded-full animate-pulse">Working</div>}
                {status === Status.Stopped && <div className="bg-red-500 text-white py-1 px-3 rounded-full">Failed</div>}
                <h2 className="text-lg break-words overflow-hidden">{seed}</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <button className="text-bgPurple" onClick={handleCopy}>Copy links ({links.length})</button>
                {!parentId && <button className="text-bgPurple" onClick={handleCheckChildrenClick}>Check Children</button>}
            </div>
        </div>
    )
}