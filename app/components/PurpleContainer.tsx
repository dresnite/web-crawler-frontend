import { ReactNode } from "react";
import clsx from "clsx";

interface PurpleContainerProps {
    children: ReactNode;
    centered?: boolean;
}

export default function PurpleContainer({ children, centered = true }: PurpleContainerProps) {
    return (
        <div className={clsx(
            "flex items-center min-h-screen w-full bg-bgPurple",
            {
                "justify-center": centered
            }
        )}>
            {children}
        </div>
    );
}