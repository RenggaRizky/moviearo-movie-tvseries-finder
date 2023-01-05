import React from "react";

const movieVideo = [];
for (let i = 0; i <= 10; i++) {
    movieVideo.push(
        <div className="flex flex-col" key={i}>
            <div className="w-[22.5rem] h-52 bg-gray-800 animate-pulse rounded-2xl" />
            <div className="mb-4 mt-6">
                <div className="mb-2 w-72 bg-gray-800 animate-pulse rounded-full h-4" />
                <div className="w-24 bg-gray-800 animate-pulse rounded-full h-4" />
            </div>
        </div>
    );
}

export default function MovieVideoSkeleton() {
    return <>{movieVideo}</>;
}
