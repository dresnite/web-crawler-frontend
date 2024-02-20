import { useEffect, useState } from "react";
import ICrawlingJob from "../interfaces/ICrawlingJob";
import { requestJobsByParentId, requestOriginalJobs } from "../services/api";
import useUserId from "./useUserId";
import { useDispatch, useSelector } from "react-redux";
import { setParentJobId } from "../store/job";
import GlobalState from "../interfaces/GlobalState";

export default function useJobs() {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [jobs, setJobs] = useState<ICrawlingJob[]>([]);
    const dispatch = useDispatch();
    const parentJobId = useSelector((state: GlobalState) => state.job.parentJobId);

    const ownerId = useUserId();

    useEffect(() => {
        const interval = setInterval(() => {
            sendJobsRequest();
        }, 2000);

        return  () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("received: " + parentJobId);
        sendJobsRequest();
    }, [parentJobId]);

    async function sendJobsRequest() {
        setLoading(true);

        try {
            const response = (parentJobId) ? await requestJobsByParentId(parentJobId) : await requestOriginalJobs(ownerId) ;

            if(response.status !== 200) {
                setError("Something bad happened on our end");
            } else {
                const body = await response.json();

                setJobs((parentJobId) ? body.data.crawlingJobsByParentId : body.data.originalCrawlingJobsByOwner);
            }


        } catch {
            setError("Something bad happened");
        }

        setLoading(false);
    }
    
    function getRefreshText() {
        return parentJobId ? "Go back" : "Refresh";
    }

    function getEmptyText() {
        return parentJobId ? "This job doesn't have any children jobs." : "Nothing to see here. Create a new crawling job to start monitoring it.";
    }

    async function handleRefresh() {
        if(parentJobId) {
            dispatch(setParentJobId({parentId: ""}))
        }

        await sendJobsRequest();
    }

    return { parentJobId, isLoading, error, jobs, handleRefresh, getRefreshText, getEmptyText };
}