import React, { useEffect, useState } from "react";
import Wrapper from "layouts/Wrapper";
import TitleSection from "components/TitleSection";
import MovieCardHorizontal from "components/MovieCardHorizontal";
import { useSearch } from "helpers/context/search";
import blankProfile from "assets/images/blank-profile.png";
import SearchMenu from "layouts/SearchMenu";

export default function Search() {
    const search = useSearch();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&query=test&page=1&include_adult=false
        fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${search.query}&include_adult=false`,
            {
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP response code ${response.code}`);
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
            })
            .catch((error) => {
                setResults(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [search.query]);

    console.log(results);

    if (loading) {
        return <p>loading</p>;
    }
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <SearchMenu />
                <div className="px-7">
                    <div className="mb-8">
                        <TitleSection title="Hasil pencarian" />
                    </div>

                    {results.map((item) => {
                        return (
                            <MovieCardHorizontal
                                key={item.id}
                                picture={
                                    item.poster_path
                                        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                                        : blankProfile
                                }
                                media={item.media_type}
                                score={item.vote_average}
                                title={
                                    item.original_name || item.original_title
                                }
                            />
                        );
                    })}
                </div>
            </section>
        </Wrapper>
    );
}
