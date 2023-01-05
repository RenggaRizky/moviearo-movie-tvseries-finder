import TabLists from "components/TabLists";
import React, { useEffect, useState } from "react";

export default function MovieTabLists() {
    const [latest, setLatest] = useState(null);
    const [loadLatest, setLoadLatest] = useState(true);
    const [popular, setPopular] = useState(null);
    const [loadPopular, setLoadPopular] = useState(true);
    const [toprating, setToprating] = useState(null);
    const [loadToprating, setLoadToprating] = useState(true);

    const getLatestMovie = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                setLatest(data.results);
            })
            .catch((error) => {
                setLatest(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoadLatest(false);
            });
    };

    const getPopularMovie = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                setPopular(data.results);
            })
            .catch((error) => {
                setPopular(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoadPopular(false);
            });
    };

    const getTopRatingMovie = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID&page=1`,
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
                setToprating(data.results);
            })
            .catch((error) => {
                setToprating(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoadToprating(false);
            });
    };

    useEffect(() => {
        getLatestMovie();
        getPopularMovie();
        getTopRatingMovie();
    });

    return (
        <>
            {!loadLatest && !loadPopular && !loadToprating ? (
                <TabLists
                    latest={latest}
                    popular={popular}
                    toprating={toprating}
                />
            ) : (
                <div className="md:mt-16 bg-gray-800 animate-pulse rounded-2xl h-80 w-80" />
            )}
        </>
    );
}
