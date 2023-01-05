import TitleSection from "components/TitleSection";
import React, { useEffect, useMemo, useState } from "react";
import MovieVideo from "components/MovieVideo";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";

import HorizontalDragScroll from "helpers/HorizontalDragScroll";
import { useLocation } from "react-router-dom";
import MovieVideoSkeleton from "components/MovieVideoSkeleton";

export default function MovieVideoList() {
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const movieId = location.state?.id;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
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
                setTrailer(
                    data.results.filter(
                        (video, index) => video.site === "YouTube" && index < 10
                    )
                );
            })
            .catch((error) => {
                setTrailer(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId]);

    const data = useMemo(() => trailer, [trailer]);

    return (
        <HorizontalDragScroll>
            {loading ? (
                <section className="px-6 mt-14 mb-20">
                    <div className="mb-6">
                        <TitleSectionSkeleton viewAll={false} />
                    </div>
                    <div className="flex overflow-x-scroll gap-x-4 scrollbar-hide">
                        <MovieVideoSkeleton />
                    </div>
                </section>
            ) : (
                <section className="px-6 mt-14 mb-20">
                    <div className="mb-6">
                        <TitleSection title="Kumpulan Video" viewAll={false} />
                    </div>
                    <div className="flex overflow-x-scroll gap-x-4 scrollbar-hide">
                        {data.map((data) => {
                            return (
                                <MovieVideo
                                    key={data.id}
                                    id={data.key}
                                    name={data.name}
                                    date={data.published_at}
                                />
                            );
                        })}
                    </div>
                </section>
            )}
        </HorizontalDragScroll>
    );
}
