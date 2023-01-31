import BtnPrimary from "components/Button/Primary";
import MovieCard from "components/MovieCard";
import MovieCardSkeleton from "components/MovieCardSkeleton";
import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import React, { useEffect, useMemo, useState } from "react";

export default function TopRatedTvSeriesPage() {
    const [topRatedTvSeries, setTopRatedTvSeries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [btnValue, setBtnValue] = useState("Muat lebih banyak");
    const [disabledBtn, setDisabledBtn] = useState(false);

    const handleLoadMore = () => {
        setTimeout(() => {
            setBtnValue("Muat lebih banyak");
            setDisabledBtn(false);
        }, 500);
        setBtnValue("Tunggu sebentar...");
        setDisabledBtn(true);
        setPage(page + 1);
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=${page}`,
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
                if (topRatedTvSeries === null) {
                    setTopRatedTvSeries(data.results);
                } else {
                    setTopRatedTvSeries([...topRatedTvSeries, ...data.results]);
                }
            })
            .catch((error) => {
                setTopRatedTvSeries(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    const data = useMemo(() => topRatedTvSeries, [topRatedTvSeries]);

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
                            title="serial tv top rating"
                            viewAll={false}
                        />
                        <i className="text-gray-400 text-xs leading-7 mt-6">
                            *hanya menampilkan 100 teratas
                        </i>
                    </div>
                    <div
                        className={[
                            page === 5 ? "mb-8" : "",
                            "grid grid-cols-2 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  xl:grid-cols-5",
                            // "grid grid-cols-2 justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3  xl:grid-cols-4",
                        ].join(" ")}
                    >
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
                    {page !== 5 && (
                        <div className="my-8 md:w-1/2 md:mx-auto">
                            <BtnPrimary
                                value={btnValue}
                                onClick={handleLoadMore}
                                disabled={disabledBtn}
                            />
                        </div>
                    )}
                </>
            )}
        </section>
    );
}