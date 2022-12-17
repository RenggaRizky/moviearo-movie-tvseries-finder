import TitleSection from "components/TitleSection";
import React, { createContext, useEffect, useMemo, useState } from "react";
import MovieVideo from "components/MovieVideo";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import MovieVideoSkeleton from "components/MovieVideoSkeleton";
import HorizontalDragScroll from "helpers/HorizontalDragScroll";

export const TrailerContext = createContext();

export default function LatestTrailer() {
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                setTrailer(data.results);
            })
            .catch((error) => {
                setTrailer(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const data = useMemo(() => trailer, [trailer]);

    return (
        <HorizontalDragScroll>
            {loading ? (
                <section className="px-6 mt-14 mb-12">
                    <div className="mb-12">
                        <TitleSectionSkeleton viewAll={false} />
                    </div>
                    <div className="flex overflow-x-scroll gap-x-4">
                        <MovieVideoSkeleton />
                    </div>
                </section>
            ) : (
                <section className="px-6 mt-14 mb-12">
                    <div className="mb-12">
                        <TitleSection
                            title="Trailer/Teaser terbaru"
                            viewAll={false}
                        />
                    </div>
                    <div className="flex overflow-x-scroll gap-x-4 scrollbar-hide">
                        {data.map((data) => {
                            return (
                                <TrailerContext.Provider
                                    key={data.id}
                                    value={data.id}
                                >
                                    <MovieVideo
                                        key={data.id}
                                        title={data.title}
                                        backdrop={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                                        date={data.release_date}
                                    />
                                </TrailerContext.Provider>
                            );
                        })}
                    </div>
                </section>
            )}
        </HorizontalDragScroll>
    );
}
