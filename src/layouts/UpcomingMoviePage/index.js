import BtnPrimary from "components/Button/Primary";
import MovieCard from "components/MovieCard";
import TitleSection from "components/TitleSection";
import React, { useEffect, useMemo, useState } from "react";

export default function UpcomingMoviePage() {
    const [upcomingMovies, setUpcomingMovies] = useState(null);
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
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=${page}`,
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
                if (upcomingMovies === null) {
                    setUpcomingMovies(data.results);
                } else {
                    setUpcomingMovies([...upcomingMovies, ...data.results]);
                }
            })
            .catch((error) => {
                setUpcomingMovies(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    const data = useMemo(() => upcomingMovies, [upcomingMovies]);

    return (
        <section className="px-7">
            <div className=" mb-8">
                <TitleSection title="Film terpopuler" viewAll={false} />
                <i className="text-gray-400 text-xs leading-7 mt-6">
                    *hanya menampilkan 100 teratas
                </i>
            </div>

            {loading ? (
                <p>loading</p>
            ) : (
                <div
                    className={[
                        page === 5 ? "mb-8" : "",
                        "flex flex-wrap justify-around",
                    ].join(" ")}
                >
                    {data.map((data) => {
                        return (
                            <MovieCard
                                key={data.id}
                                id={data.id}
                                title={data.original_title}
                                picture={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                score={data.vote_average}
                                date={data.release_date}
                                link={`/film/${data.id}`}
                            />
                        );
                    })}
                </div>
            )}

            {page !== 5 && (
                <div className="my-8">
                    <BtnPrimary
                        value={btnValue}
                        onClick={handleLoadMore}
                        disabled={disabledBtn}
                    />
                </div>
            )}
        </section>
    );

    return <div>UpcomingMoviePage</div>;
}
