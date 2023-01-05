import React from "react";

const movieTrailer = [];
for (let i = 0; i <= 10; i++) {
    movieTrailer.push(
        <div className="flex flex-col" key={i}>
            <div className="aspect-video w-64 cursor-pointer bg-gray-800 animate-pulse rounded-2xl"></div>
            <div className="mb-4 mt-6">
                <div className="cursor-pointer text-white font-semibold text-lg mb-2 truncate text-ellipsis overflow-hidden w-64"></div>
                <div className="text-base text-lightgray truncate text-ellipsis overflow-hidden w-64"></div>
            </div>
        </div>
    );
}

export default function movieTrailerSkeleton() {
    return <>{movieTrailer}</>;
}
