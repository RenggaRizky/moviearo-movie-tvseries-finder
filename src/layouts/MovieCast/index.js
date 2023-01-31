import CastCard from "components/CastCard";
import TitleSection from "components/TitleSection";
import HorizontalDragScroll from "helpers/HorizontalDragScroll";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import blankProfile from "assets/images/blank-profile.png";
import NoDataCard from "components/NoDataCard";
import useGetPathId from "helpers/useGetPathId";

export default function MovieCast() {
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const movieId = location.state?.id;
    const getPathId = useGetPathId();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${
                movieId || getPathId[0]
            }/credits?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP response code ${response.code}`);
                }
                return response.json();
            })
            .then((data) => {
                setCast(data.cast);
            })
            .catch((error) => {
                setCast(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId]);

    const data = useMemo(() => cast, [cast]);

    return (
        <HorizontalDragScroll>
            {loading ? (
                <section className="px-7 mb-16">
                    <TitleSectionSkeleton viewAll={false} />
                    <div className="flex gap-x-4 overflow-x-scroll group mb-14 scrollbar-hide mt-6">
                        <MovieCardSkeleton />
                    </div>
                </section>
            ) : data.length !== 0 ? (
                <section className="px-7 mb-16">
                    <TitleSection viewAll={false} title="Pemeran" />
                    <div className="flex gap-x-4 overflow-x-scroll group mb-14 scrollbar-hide mt-6">
                        {data.map((data) => {
                            return (
                                <CastCard
                                    key={data.id}
                                    name={data.name}
                                    profile={
                                        data.profile_path
                                            ? `https://image.tmdb.org/t/p/original/${data.profile_path}`
                                            : blankProfile
                                    }
                                    character={data.character}
                                />
                            );
                        })}
                    </div>
                </section>
            ) : (
                <section className="px-7 mb-16">
                    <TitleSection viewAll={false} title="Pemeran" />
                    <div className="mt-6">
                        <NoDataCard message="Tidak ada pemeran atau pemeran belum ditambahkan" />
                    </div>
                </section>
            )}
        </HorizontalDragScroll>
    );
}
