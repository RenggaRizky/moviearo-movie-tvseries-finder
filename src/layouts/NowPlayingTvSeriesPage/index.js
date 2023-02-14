import MovieCard from "components/MovieCard";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import Pagination from "components/Pagination";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import { useFilter } from "helpers/context/filter";
import { usePagination } from "helpers/context/pagination";
import useDate from "helpers/useDate";
import React, { useEffect, useMemo, useState } from "react";

export default function NowPlayingTvSeriesPage() {
    const [nowPlayingTvSeries, setNowPlayingTvSeries] = useState(null);
    const [loading, setLoading] = useState(true);
    const filter = useFilter();
    const pagination = usePagination();

    const date = useDate();
    const { currentDate } = date;

    useEffect(() => {
        fetch(
            filter.sort === "default"
                ? `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=${pagination.page}`
                : `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&sort_by=${filter.sort}&air_date.gte=${currentDate}&page=${pagination.page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error status ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setNowPlayingTvSeries(data.results);
            })
            .catch((error) => {
                setNowPlayingTvSeries(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [pagination.page, filter.sort]);

    const data = useMemo(() => nowPlayingTvSeries, [nowPlayingTvSeries]);

    return (
        <section className="px-7">
            {loading ? (
                <>
                    <div className=" mb-8">
                        <TitleSectionSkeleton />
                        <div className="bg-gray-800 h-5 w-28 animate-pulse rounded-full mt-2 md:w-32 lg:w-36 xl:w-40" />
                    </div>

                    <div className="flex flex-wrap justify-around">
                        <MovieCardSkeleton />
                    </div>
                </>
            ) : (
                <>
                    <div className=" mb-8">
                        <TitleSection
                            title="Serial tv hari ini"
                            viewAll={false}
                        />
                        <i className="text-gray-400 text-xs leading-7 mt-6">
                            *hanya menampilkan 100 teratas
                        </i>
                    </div>
                    <div className="mb-8 grid grid-cols-2 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3  xl:grid-cols-4">
                        {data.map((data) => {
                            return (
                                <MovieCard
                                    id={data.id}
                                    key={data.id}
                                    title={data.original_name}
                                    picture={data.poster_path}
                                    score={data.vote_average}
                                    date={data.first_air_date}
                                    link={`/serialtv/${data.id}`}
                                />
                            );
                        })}
                    </div>
                    <div className="my-8 flex items-center justify-center lg:justify-start">
                        <Pagination />
                    </div>
                </>
            )}
        </section>
    );
}
