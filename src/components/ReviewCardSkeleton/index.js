import React from "react";

const reviewCard = [];
for (let i = 0; i <= 1; i++) {
    reviewCard.push(
        <div
            className="bg-gray-800 animate-pulse rounded-2xl h-40 w-full mb-6 lg:basis-[49%]"
            key={i}
        />
    );
}

export default function ReviewCardSkeleton() {
    return <>{reviewCard}</>;
}
