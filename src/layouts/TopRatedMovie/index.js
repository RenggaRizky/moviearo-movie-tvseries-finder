import MovieLink from "components/MovieLink";
import MovieLinkSkeleton from "components/MovieLinkSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import React, { useEffect, useMemo, useState } from "react";

export default function TopRatedMovie() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP response status ${response.status}`);
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
    }, []);

    const data = useMemo(() => movies, [movies]);
    return (
        <>
            {loading ? (
                <section className="pt-10 pb-6 px-6">
                    <div className="pb-16">
                        <TitleSectionSkeleton viewAll={true} />
                    </div>
                    <MovieLinkSkeleton />
                </section>
            ) : (
                <section className="pb-6  px-6 md:bg-lightblack md:pt-9">
                    <div className="pb-16 md:pb-12">
                        <TitleSection
                            title="Top rating film"
                            viewAll={true}
                            link="/"
                        />
                    </div>
                    {data
                        .filter((data) => movies.indexOf(data) <= 4)
                        .map((data) => {
                            return (
                                <MovieLink
                                    key={data.title}
                                    title={data.title}
                                    score={data.vote_average}
                                    link={`/film/${data.id}`}
                                />
                            );
                        })}
                </section>
            )}
        </>
    );
}
