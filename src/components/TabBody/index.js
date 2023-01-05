import MovieLink from "components/MovieLink";
import React from "react";
export function TabBody({ tabValue, value, data }) {
    return (
        <div
            className={[
                tabValue === value ? "inline-block" : "hidden",
                "text-white bg-lightblack p-4 w-full",
            ].join(" ")}
        >
            {data
                .filter((x) => data.indexOf(x) <= 4)
                .map((y, index) => {
                    return (
                        <MovieLink
                            id={y.id}
                            rank={true}
                            rankNum={index + 1}
                            key={y.id}
                            title={y.title}
                            score={y.vote_average}
                            link={`/film/${y.id}`}
                        />
                    );
                })}
        </div>
    );
}
