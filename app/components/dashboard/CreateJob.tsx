import useCreateJob from "@/app/hooks/useCreateJob";
import Spinner from "../Spinner";
import clsx from "clsx";

export default function CreateJob() {
    const {handleSeed, sendCreateJobRequest, loading, error} = useCreateJob();

    return (
        <div className={clsx(
            "job-container",
            {
                "!border-bgPurple": !error,
                "!border-red-500": error
            }
        )}>
            <input type="text" className="border px-5 py-3 rounded-full w-full" placeholder="https://example.com" onChange={handleSeed} />
            
            <button className="purple-button min-w-28" onClick={sendCreateJobRequest} disabled={loading}>
                {loading && <Spinner/>}
                {!loading && "Create"}
            </button>
        </div>
    );
}