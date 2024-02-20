interface EmptyJobProps {
    getText: () => string;
}

export default function EmptyJob({ getText }: EmptyJobProps) {
    return (
        <div className="job-container">
            <p className="text-xl">{getText()}</p>
        </div>
    );
}