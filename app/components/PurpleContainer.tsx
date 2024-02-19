import { ReactNode } from "react";

interface PurpleContainerProps {
    children: ReactNode;
}

export default function PurpleContainer({ children }: PurpleContainerProps) {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-bgPurple">
            {children}
        </div>
    );
}