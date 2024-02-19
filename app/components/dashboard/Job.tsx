import Status from "@/app/utils/Status";

interface JobProps {
    seed: string;
    status: Status;
}

export default function Job({ seed, status }: JobProps) {
    return (
        <div className="job-container justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {status === Status.Finished && <div className="bg-green-500 text-white py-1 px-3 rounded-full">Done</div>}
                {status === Status.Working && <div className="bg-yellow-500 text-white py-1 px-3 rounded-full animate-pulse">Working</div>}
                {status === Status.Stopped && <div className="bg-red-500 text-white py-1 px-3 rounded-full">Stopped</div>}
                <h2 className="text-xl">{seed}</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <a href="" className="text-bgPurple">Link List (5)</a>
                <a href="" className="text-bgPurple">Routes</a>
            </div>
        </div>
    )
}