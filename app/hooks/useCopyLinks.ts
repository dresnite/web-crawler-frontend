export default function useCopyLinks(links: string[]) {
    function handleCopy() {
        navigator.clipboard.writeText(JSON.stringify(links));
    }

    return handleCopy;
}