import React, { useEffect, useState } from "react";
import Wrapper from "layouts/Wrapper";
import TitleSection from "components/TitleSection";
import MovieCardHorizontal from "components/MovieCardHorizontal";
import { useSearch } from "helpers/context/search";
import blankMovie from "assets/images/blank-movie.png";
import SearchMenu from "layouts/SearchMenu";
import moment from "moment";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import MovieCardHorizontalSkeleton from "components/MovieCardHorizontalSkeleton";
import NoDataCard from "components/NoDataCard";

export default function Search() {
    const search = useSearch();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${search.query}&include_adult=false`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    setError(true);
                    throw new Error(`HTTP response code ${response.message}`);
                }
                setLoading(true);
                return response.json();
            })
            .then((data) => {
                setResults(
                    data.results.filter(
                        (item) =>
                            item.media_type === "movie" ||
                            item.media_type === "tv"
                    )
                );
                setLoading(false);
            })
            .catch((error) => {
                setResults(null);
                console.log(error.message);
            });
    }, [search.query]);

    if (error || results?.length === 0) {
        return (
            <Wrapper>
                <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl mb-36">
                    <SearchMenu />
                    <div className="px-7">
                        <div className="mb-8">
                            <TitleSection
                                title={`Hasil pencarian "${search.query}"`}
                            />
                        </div>
                        <NoDataCard message="sesuatu yang anda cari tidak ditemukan" />
                    </div>
                </section>
            </Wrapper>
        );
    }

    if (loading) {
        return (
            <Wrapper>
                <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl mb-36">
                    <SearchMenu />
                    <div className="px-7">
                        <div className="mb-8">
                            <TitleSectionSkeleton />
                        </div>
                        <MovieCardHorizontalSkeleton />
                    </div>
                </section>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl mb-36">
                <SearchMenu />
                <div className="px-7">
                    <div className="mb-8">
                        <TitleSection
                            title={`Hasil pencarian "${search.query}"`}
                        />
                    </div>

                    {results.map((item) => {
                        return (
                            <MovieCardHorizontal
                                key={item.id}
                                id={item.id}
                                picture={
                                    item.poster_path
                                        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                                        : blankMovie
                                }
                                media={item.media_type}
                                score={item.vote_average}
                                title={
                                    item.original_name || item.original_title
                                }
                                year={
                                    item.release_date
                                        ? moment(item.release_date).format("Y")
                                        : item.first_air_date
                                        ? moment(item.first_air_date).format(
                                              "Y"
                                          )
                                        : " - "
                                }
                                link={
                                    item.media_type === "movie"
                                        ? `/film/${item.id}`
                                        : `/serialtv/${item.id}`
                                }
                            />
                        );
                    })}
                </div>
            </section>
        </Wrapper>
    );
}
