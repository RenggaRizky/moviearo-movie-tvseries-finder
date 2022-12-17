import React from "react";

export default function TitleSectionSkeleton({ viewAll }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
                <div className="h-7 bg-gray-800 w-52 animate-pulse rounded-full md:w-56 lg:w-60 xl:w-64" />
            </div>
            {viewAll && (
                <div className="h-5 bg-gray-800 w-20 animate-pulse rounded-full md:w-16 lg:w-20" />
            )}
        </div>
    );
}
