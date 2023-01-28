import React from "react";

const MovieCardHorizontal = [];
for (let i = 0; i <= 10; i++) {
    MovieCardHorizontal.push(
        <>
            <div className="flex items-start gap-x-4 md:gap-x-6" key={i}>
                <div className="mb-4 relative lg:mb-6 w-24 h-36 group">
                    <div className="h-full w-full bg-gray-800 rounded-2xl animate-pulse"></div>
                </div>
                <div className="flex flex-col h-36 gap-y-2 justify-center">
                    <div className="bg-gray-800 rounded-full animate-pulse w-56 h-5"></div>
                    <div className="bg-gray-800 rounded-full animate-pulse w-36 h-5"></div>
                </div>
            </div>
            <hr className="border-divider mb-4" />
        </>
    );
}

export default function MovieCardHorizontalSkeleton() {
    return <>{MovieCardHorizontal}</>;
}
