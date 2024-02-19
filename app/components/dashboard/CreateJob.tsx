export default function CreateJob() {
    return (
        <div className="job-container !border-bgPurple">
            <input type="text" className="border px-5 py-3 rounded-full w-full" placeholder="https://example.com" />
            <button className="purple-button min-w-28">Create</button>
        </div>
    );
}