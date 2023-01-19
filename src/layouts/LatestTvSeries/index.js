import MovieCard from "components/MovieCard";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import HorizontalDragScroll from "helpers/HorizontalDragScroll";
import React, { useEffect, useMemo, useState } from "react";

export default function LatestTvSeries() {
    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTT{ error status ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setSeries(data.results);
            })
            .catch((error) => {
                setSeries(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const data = useMemo(() => series, [series]);

    return (
        <HorizontalDragScroll>
            {loading ? (
                <section className="px-6">
                    <div className="mb-12">
                        <TitleSectionSkeleton viewAll={true} />
                    </div>
                    <div className="flex gap-x-4 overflow-x-hidden mb-14">
                        <MovieCardSkeleton />
                    </div>
                </section>
            ) : (
                <section className="px-6">
                    <div className="mb-12">
                        <TitleSection
                            title="Serial TV hari ini"
                            viewAll={true}
                            link="/serialtv/hari-ini"
                        />
                    </div>
                    <div className="flex gap-x-4 overflow-x-scroll group mb-14 scrollbar-hide">
                        {data.map((data) => {
                            return (
                                <MovieCard
                                    id={data.id}
                                    key={data.id}
                                    title={data.original_name}
                                    picture={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                    score={data.vote_average}
                                    date={data.first_air_date}
                                    link={`/serialtv/${data.id}`}
                                />
                            );
                        })}
                    </div>
                </section>
            )}
        </HorizontalDragScroll>
    );
}
