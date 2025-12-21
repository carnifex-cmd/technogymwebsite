import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
}
