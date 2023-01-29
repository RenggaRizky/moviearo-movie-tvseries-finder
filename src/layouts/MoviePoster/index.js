import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
import { runtime } from "helpers/Runtime";
import blankMovie from "assets/images/blank-movie.png";

export default function MoviePoster() {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const movieId = location.state?.id;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID`,
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
                setDetails(data);
            })
            .catch((error) => {
                setDetails(null);
                console.log(error.message);
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    console.log(details);

    return (
        <>
            {loading ? (
                <Skeleton />
            ) : (
                <section
                    className="bg-fixed bg-cover bg-center lg:justify-between lg:py-24 lg:px-16 lg:gap-x-2"
                    style={{
                        backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.7), rgba(22, 22, 22, 0.9)), url(https://image.tmdb.org/t/p/original/${
                            details.backdrop_path
                                ? details.backdrop_path
                                : details.poster_path
                        })`,
                    }}
                >
                    <div className="lg:flex lg:justify-evenly lg:mx-auto xl:max-w-7xl">
                        <div
                            className={[
                                details.poster_path
                                    ? "xl:basis-[30%]"
                                    : " xl:basis-[20%]",
                                "group relative w-60 h-80 block mx-auto my-8 lg:my-0 lg:basis-1/2",
                            ].join(" ")}
                        >
                            <div
                                className="absolute bg-contain bg-center bg-no-repeat h-full w-full top-4 lg:top-0 md:bg-left"
                                style={{
                                    backgroundImage: details.poster_path
                                        ? `url(https://image.tmdb.org/t/p/original/${details.poster_path})`
                                        : `url(${blankMovie})`,
                                }}
                            ></div>
                        </div>
                        <div
                            className={[
                                details.poster_path ? "" : "xl:basis-[70%]",
                                "bg-lightblack px-8 py-14 text-center mt-9 mb-16 md:m-0 md:flex md:justify-center md:flex-col lg:basis-full",
                            ].join(" ")}
                        >
                            <h3 className="text-lg font-medium uppercase text-white mb-4 md:text-xl">
                                {details.original_title
                                    ? details.original_title
                                    : details.title}
                            </h3>

                            <div className="text-xs text-lightgray mb-6 space-x-2 md:text-sm">
                                <span>
                                    {details.release_date
                                        ? moment(details.release_date).format(
                                              "l"
                                          )
                                        : "-"}
                                </span>
                                <span>|</span>
                                <span className="uppercase">
                                    {details.production_countries.length !== 0
                                        ? `(${details.production_countries[0].iso_3166_1})`
                                        : "-"}
                                </span>
                                <span>|</span>
                                <span className="capitalize">
                                    {details.genres.length !== 0
                                        ? details.genres.map(
                                              (genre, index) =>
                                                  (index ? ", " : "") +
                                                  genre.name
                                          )
                                        : "-"}
                                </span>
                                <span>|</span>
                                <span>
                                    {details.runtime
                                        ? runtime(details.runtime)
                                        : "-"}
                                </span>
                            </div>

                            <div className="bg-primary border border-solid border-white text-white text-3xl p-5 font-bold inline-block md:text-4xl md:w-24 md:mx-auto lg:text-[2rem]">
                                <p>
                                    {details.vote_average
                                        ? details.vote_average.toFixed(1) * 10
                                        : "-"}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

function Skeleton() {
    return (
        <section className="bg-fixed bg-cover bg-center lg:flex lg:justify-between lg:py-24 lg:px-16 lg:gap-x-8 lg:mx-auto xl:max-w-7xl">
            <div className="group relative w-60 h-80 block mx-auto my-8 lg:my-0 lg:basis-1/2 xl:basis-[30%]">
                <div className="absolute bg-gray-800 animate-pulse h-full w-full rounded-2xl top-5 md:top-0 md:bg-left" />
            </div>
            <div className="bg-lightblack px-8 py-14 text-center mt-9 mb-16 md:m-0 md:flex md:justify-center md:flex-col lg:basis-full">
                <div className="bg-gray-800 animate-pulse h-5 w-full rounded-full mb-4 sm:w-3/4 mx-auto md:h-6" />

                <div className="mb-6 space-x-2">
                    <span className="bg-gray-800 animate-pulse h-4 w-16 rounded-full inline-block md:h-5" />
                    <span className="bg-gray-800 animate-pulse h-4 w-12 rounded-full inline-block md:h-5" />
                    <span className="bg-gray-800 animate-pulse h-4 w-24 rounded-full inline-block md:h-5" />
                    <span className="bg-gray-800 animate-pulse h-4 w-16 rounded-full inline-block md:h-5" />
                </div>

                <div className="bg-gray-800 animate-pulse p-10 inline-block mx-auto rounded-2xl md:p-12" />
            </div>
        </section>
    );
}
