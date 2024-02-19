import Status from "../utils/Status";

export default function useJobs() {
    return [
        {
            seed: "https://wetaca.com",
            status: Status.Working
        },
        {
            seed: "https://pokemon.com",
            status: Status.Finished
        }
    ];
}