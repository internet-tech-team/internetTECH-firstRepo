import React from "react";

type TrapezoidCardProps = {
children: React.ReactNode;
};

// TrapezoidCard.tsx
export default function TrapezoidCard({ children }: TrapezoidCardProps) {
    return (
    <div className="relative shadow-2xl overflow-visible rounded-2xl" style={{ backgroundColor: "#FEFCE8" }}>
        <div
        style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundColor: "#FEFCE8",
            padding: "2rem",
        }}
        className="w-[500px] h-[500px] flex flex-col justify-center"
        >
        {children}
        </div>
    </div>
    );
}
