import Status from "../utils/Status";

export default interface ICrawlingJob {
    owner: string,
    id: string | undefined,
    parentJob: string | null,
    seed: string,
    status: Status,
    linksFound: string[], // had to make it linksfound instead of links because of a conflict with document
    childrenJobs: string[] // not children because of a conflict with Document too
}