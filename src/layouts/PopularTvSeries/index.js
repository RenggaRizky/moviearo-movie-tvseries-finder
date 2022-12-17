import TitleSection from "components/TitleSection";
import React, { useEffect, useMemo, useState } from "react";
import MovieLink from "components/MovieLink";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import MovieLinkSkeleton from "components/MovieLinkSkeleton";

export default function PopularTvSeries() {
    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                <section className="pb-6  px-6 md:bg-lightblack md:pt-9">
                    <div className="pb-16 md:pb-12">
                        <TitleSection
                            title="Serial TV terpopuler"
                            viewAll={true}
                            link="/"
                        />
                    </div>
                    {data
                        .filter((data) => series.indexOf(data) <= 4)
                        .map((data) => {
                            return (
                                <MovieLink
                                    key={data.original_name}
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
