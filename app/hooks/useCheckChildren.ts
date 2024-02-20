import { useDispatch } from "react-redux";
import { setParentJobId } from "../store/job";

export default function useCheckChildren(jobId: string) {
    const dispatch = useDispatch();

    function handleCheckChildrenClick() {
        dispatch(setParentJobId({ parentId: jobId }));
    }

    return handleCheckChildrenClick;
}