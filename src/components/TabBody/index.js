import MovieLink from "components/MovieLink";
import React from "react";
export function TabBody({ tabValue, value, data, type }) {
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
                            title={type === "movie" ? y.title : y.name}
                            score={y.vote_average}
                            link={
                                type === "movie"
                                    ? `/film/${y.id}`
                                    : `/serialtv/${y.id}`
                            }
                        />
                    );
                })}
        </div>
    );
}
