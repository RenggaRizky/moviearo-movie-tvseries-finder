import MovieLink from "components/MovieLink";
import MovieLinkSkeleton from "components/MovieLinkSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import React, { useEffect, useMemo, useState } from "react";

export default function TopRatedTvSeries() {
    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
        <>
            {loading ? (
                <section className="pt-10 pb-6 px-6">
                    <div className="pb-16">
                        <TitleSectionSkeleton viewAll={true} />
                    </div>
                    <MovieLinkSkeleton />
                </section>
            ) : (
                <section className="pb-3  px-6 md:bg-lightblack md:pt-9">
                    <div className="pb-16 md:pb-12">
                        <TitleSection
                            title="Top rating Serial TV"
                            viewAll={true}
                            link="/serialtv/top-rating"
                        />
                    </div>
                    {data
                        .filter((data) => series.indexOf(data) <= 4)
                        .map((data) => {
                            return (
                                <MovieLink
                                    id={data.id}
                                    key={data.id}
                                    title={data.original_name}
                                    score={data.vote_average}
                                    link={`/serialtv/${data.id}`}
                                />
                            );
                        })}
                </section>
            )}
        </>
    );
}
