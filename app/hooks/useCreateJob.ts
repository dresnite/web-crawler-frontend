import { useState } from "react";
import { createJob } from "../services/api";
import useInput from "./useInput";
import useUserId from "./useUserId";

export default function useCreateJob() {
    const seedInput = useInput();
    const ownerId = useUserId();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function sendCreateJobRequest() {
        setLoading(true);

        try {
            const response = await createJob(ownerId, seedInput.value);

            console.log(`Successfully created job, status ${response.status}`);
        } catch {
            setError("Failed to create job");
            console.log(`Failed to create job ${seedInput.value}`);
        }

        setLoading(false);
    }

    return {handleSeed: seedInput.handleOnChange, sendCreateJobRequest, loading, error}
}