import React from "react";

const movieLink = [];
for (let i = 0; i <= 4; i++) {
    movieLink.push(
        <div key={i}>
            <div className="flex justify-between items-center mb-4 md:mb-4">
                <div className="h-5 w-72 rounded-full bg-gray-800 animate-pulse lg:h-6" />
                <div className="bg-gray-800 w-9 h-9 rounded-lg animate-pulse"></div>
            </div>

            <hr className="border-divider mb-8 md:mb-6" />
        </div>
    );
}

export default function MovieLinkSkeleton() {
    return <>{movieLink}</>;
}
