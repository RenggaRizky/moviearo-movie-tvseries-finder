import React from "react";

const movieCard = [];
for (let i = 0; i <= 10; i++) {
    movieCard.push(
        <div className="flex flex-col" key={i}>
            <div className="mb-4 lg:mb-6">
                <div className="w-36 h-52 bg-gray-800 rounded-2xl animate-pulse lg:w-44 lg:h-64" />
            </div>
            <div className="mb-4 lg:mb-6">
                <div className="">
                    <div className="mb-2 w-32 h-3.5 bg-gray-800 rounded-full animate-pulse lg:w-44 lg:h-4" />
                </div>
                <div className="h-3 w-20 bg-gray-800 rounded-full animate-pulse lg:h-4 lg:w-24" />
            </div>
        </div>
    );
}

export default function MovieCardSkeleton() {
    return <>{movieCard}</>;
}
