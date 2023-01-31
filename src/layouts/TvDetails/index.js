import TitleSection from "components/TitleSection";
import TitleSectionSkeleton from "components/TitleSectionSkeleteon";
import { runtime } from "helpers/Runtime";
import React, { useCallback, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import useGetPathId from "helpers/useGetPathId";

const initialStateDetails = {
    details: null,
    directors: null,
    writers: null,
    producers: null,
    loadingDetails: true,
    loadingCrews: true,
    englishDesc: null,
    loadingEngDesc: true,
};

const detailsReducer = (state, action) => {
    switch (action.type) {
        case "DETAILS":
            return { ...state, details: action.payload.details };
        case "ENG_DESC":
            return { ...state, englishDesc: action.payload.details };
        case "DIRECTORS":
            return { ...state, directors: action.payload.directors };
        case "WRITERS":
            return { ...state, writers: action.payload.writers };
        case "PRODUCERS":
            return { ...state, producers: action.payload.producers };
        case "LOADING_DETAILS":
            return {
                ...state,
                loadingDetails: false,
            };
        case "LOADING_CREWS":
            return {
                ...state,
                loadingCrews: false,
            };
        case "LOADING_ENG_DESC":
            return {
                ...state,
                loadingEngDesc: false,
            };
        default:
            break;
    }
};

const skeleton = [];
for (let i = 0; i <= 4; i++) {
    skeleton.push(
        <tr key={i}>
            <td>
                <div className="bg-gray-800 animate-pulse h-5 w-20 rounded-full mb-2 mr-4" />
            </td>
            <td>
                <div className="bg-gray-800 animate-pulse h-5 w-28 rounded-full mb-2" />
            </td>
        </tr>
    );
}

export default function TvDetails() {
    const [state, dispatch] = useReducer(detailsReducer, initialStateDetails);

    const location = useLocation();
    const seriesId = location.state?.id;
    const getPathId = useGetPathId();

    const getSeriesDetails = useCallback(
        (id) => {
            fetch(
                `https://api.themoviedb.org/3/tv/${
                    id || getPathId[0]
                }?api_key=${process.env.REACT_APP_API_KEY}&language=id-ID`,
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
                    dispatch({
                        type: "DETAILS",
                        payload: { details: data },
                    });
                })
                .catch((error) => {
                    dispatch({ type: "DETAILS", payload: null });
                    console.log(error.message);
                })
                .finally(() => dispatch({ type: "LOADING_DETAILS" }));
        },
        [state.details]
    );

    const getSeriesEngDesc = useCallback(
        (id) => {
            fetch(
                `https://api.themoviedb.org/3/tv/${
                    id || getPathId[0]
                }?api_key=${process.env.REACT_APP_API_KEY}`,
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
                    dispatch({
                        type: "ENG_DESC",
                        payload: { details: data.overview },
                    });
                })
                .catch((error) => {
                    dispatch({ type: "ENG_DESC", payload: null });
                    console.log(error.message);
                })
                .finally(() => dispatch({ type: "LOADING_ENG_DESC" }));
        },
        [state.englishDesc]
    );

    const getSeriesCredits = useCallback(
        (id) => {
            fetch(
                `https://api.themoviedb.org/3/tv/${
                    id || getPathId[0]
                }/credits?api_key=${
                    process.env.REACT_APP_API_KEY
                }&language=id-ID`,
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
                    dispatch({
                        type: "PRODUCERS",
                        payload: {
                            producers: data.crew.filter(
                                (x) => x.job === "Producer"
                            ),
                        },
                    });

                    dispatch({
                        type: "WRITERS",
                        payload: {
                            writers: data.crew.filter(
                                (x) => x.job === "Writer" || x.job === "Story"
                            ),
                        },
                    });

                    dispatch({
                        type: "DIRECTORS",
                        payload: {
                            directors: data.crew.filter(
                                (x) => x.job === "Director"
                            ),
                        },
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .finally(() => dispatch({ type: "LOADING_CREWS" }));
        },
        [state.producers, state.writers, state.directors]
    );

    useEffect(() => {
        getSeriesDetails(seriesId);
        getSeriesCredits(seriesId);
        getSeriesEngDesc(seriesId);
    }, [seriesId]);

    return (
        <section className="px-7 mb-16 md:mt-16 lg:pl-7">
            {!state.loadingDetails &&
            !state.loadingCrews &&
            !state.loadingEngDesc ? (
                <>
                    <TitleSection viewAll={false} title="Informasi serial tv" />
                    {state.details.overview.length !== 0 ? (
                        <p className="text-lightgray text-base leading-7 mt-6">
                            {state.details.overview}
                        </p>
                    ) : state.englishDesc.length !== 0 ? (
                        <>
                            <p className="text-lightgray text-base leading-7 mt-6">
                                {state.englishDesc}
                            </p>
                            <i className="text-red-500 text-xs leading-7 mt-6">
                                *deskripsi tidak tersedia dalam Bahasa Indonesia
                            </i>
                        </>
                    ) : (
                        <p className="text-lightgray text-base leading-7 mt-6">
                            -
                        </p>
                    )}
                    <table className="w-full mt-4">
                        <tbody>
                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Judul Asli
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    <p className="text-sm text-lightgray">
                                        {state.details.original_name}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Status
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    <p className="text-sm text-lightgray">
                                        {state.details.status}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Saluran Televisi
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    <p className="text-sm text-lightgray">
                                        {state.details.networks.length !== 0
                                            ? state.details.networks[0].name
                                            : "-"}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Perusahaan Produksi
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    <p className="text-sm text-lightgray">
                                        {state.details.production_companies
                                            .length !== 0
                                            ? state.details.production_companies.map(
                                                  (company, index) =>
                                                      (index ? ", " : " ") +
                                                      company.name
                                              )
                                            : "-"}
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Sutradara
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    {state.directors.length === 0 ? (
                                        <span className="text-sm text-lightgray">
                                            -
                                        </span>
                                    ) : (
                                        state.directors.map(
                                            (director, index) => (
                                                <span
                                                    key={director.name}
                                                    className="text-sm text-lightgray"
                                                >
                                                    {(index ? ", " : "") +
                                                        director.name}
                                                </span>
                                            )
                                        )
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2  align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Penulis
                                    </h4>
                                </td>
                                <td className="py-2 pr-4 align-top">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    {state.writers.length === 0 ? (
                                        <p className="text-sm text-lightgray">
                                            -
                                        </p>
                                    ) : (
                                        state.writers.map((writer, index) => (
                                            <span
                                                key={writer.name}
                                                className="text-sm text-lightgray"
                                            >
                                                {(index ? ", " : "") +
                                                    writer.name}
                                            </span>
                                        ))
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 align-top">
                                    <h4 className="font-medium text-white text-base">
                                        Produser
                                    </h4>
                                </td>
                                <td className="py-2 align-top pr-4">
                                    <p className="font-semibold text-white text-base text-center">
                                        :
                                    </p>
                                </td>
                                <td className="py-2 align-top">
                                    {state.producers.length === 0 ? (
                                        <span className="text-sm text-lightgray">
                                            -
                                        </span>
                                    ) : (
                                        state.producers.map(
                                            (producer, index) => (
                                                <span
                                                    key={producer.name}
                                                    className="text-sm text-lightgray"
                                                >
                                                    {(index ? ", " : "") +
                                                        producer.name}
                                                </span>
                                            )
                                        )
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : (
                <section className="mb-16 md:mt-16">
                    <TitleSectionSkeleton />
                    <div className="bg-gray-800 animate-pulse rounded-full mt-6 h-5 w-[40rem]" />
                    <div className="bg-gray-800 animate-pulse rounded-full mt-3 h-5 w-[30rem]" />
                    <table className="w-auto mt-4">
                        <tbody>{skeleton}</tbody>
                    </table>
                </section>
            )}
        </section>
    );
}
