import { ReactNode } from "react";
import clsx from "clsx";

interface PurpleContainerProps {
    children: ReactNode;
    centered?: boolean;
}

export default function PurpleContainer({ children, centered = true }: PurpleContainerProps) {
    return (
        <div className={clsx(
            "flex min-h-screen w-full bg-bgPurple",
            {
                "items-center justify-center": centered
            }
        )}>
            {children}
        </div>
    );
}