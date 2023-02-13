import MovieCard from "components/MovieCard";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import Pagination from "components/Pagination";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import { useFilter } from "helpers/context/filter";
import { usePagination } from "helpers/context/pagination";
import useDate from "helpers/useDate";
import React, { useEffect, useMemo, useState } from "react";

export default function UpcomingMoviePage() {
    const [upcomingMovies, setUpcomingMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const filter = useFilter();
    const pagination = usePagination();

    const date = useDate();
    const { nextMonth } = date;

    useEffect(() => {
        fetch(
            filter.sort === "default"
                ? `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${pagination.page}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&sort_by=${filter.sort}&include_adult=false&include_video=false&page=${pagination.page}&release_date.gte=${nextMonth}`,
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
                setUpcomingMovies(data.results);
            })
            .catch((error) => {
                setUpcomingMovies(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [pagination.page, filter.sort]);

    const data = useMemo(() => upcomingMovies, [upcomingMovies]);

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
                            title="Film yang akan datang"
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
                                    key={data.id}
                                    id={data.id}
                                    title={data.original_title}
                                    picture={data.poster_path}
                                    score={data.vote_average}
                                    date={data.release_date}
                                    link={`/film/${data.id}`}
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
