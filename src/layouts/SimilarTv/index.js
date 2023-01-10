import React, { useEffect, useMemo, useState } from "react";
import MovieCard from "components/MovieCard";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import HorizontalDragScroll from "helpers/HorizontalDragScroll";
import { useLocation } from "react-router-dom";

export default function SimilarTv() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const seriesId = location.state?.id;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/${seriesId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                setMovies(data.results);
            })
            .catch((error) => {
                setMovies(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [seriesId]);

    const data = useMemo(() => movies, [movies]);

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
                            title="Serial tv serupa"
                            viewAll={false}
                        />
                    </div>
                    <div className="flex gap-x-4 overflow-x-scroll group mb-14 scrollbar-hide">
                        {data.map((data) => {
                            return (
                                <MovieCard
                                    key={data.id}
                                    id={data.id}
                                    title={data.name}
                                    picture={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                    score={data.vote_average}
                                    date={data.release_date}
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
