import React, { useContext, useMemo, useState } from "react";
import { TrailerContext } from "layouts/LatestTrailer";
import ReactPlayer from "react-player";

export default function TrailerModal({ children, className }) {
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [playVideo, setPlayVideo] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const idMovie = useContext(TrailerContext);

    const handleGetVideo = (id) => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
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
                setTrailer(data.results[0]);
            })
            .catch((error) => {
                setTrailer(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleOpenModal = (id) => {
        setOpenModal(!openModal);
        handleGetVideo(id);
    };

    const handleCloseModal = () => {
        setPlayVideo(false);
        setOpenModal(!openModal);
    };

    const data = useMemo(() => trailer, [trailer]);

    return (
        <div className={className}>
            <div onClick={() => handleOpenModal(idMovie)}>{children}</div>

            <div
                id="popup-modal"
                tabIndex="-1"
                className={[
                    openModal ? "" : "hidden",
                    "fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-slate-600 bg-opacity-75",
                ].join(" ")}
            >
                <div className="relative flex items-center w-full h-full max-w-md sm:max-w-2xl md:mx-auto">
                    <div className="relative h-auto bg-darkblack shadow basis-full">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-lightblack  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                            data-modal-toggle="popup-modal"
                            onClick={handleCloseModal}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {loading ? (
                            <div className="px-4 py-12 text-center">
                                <div className="bg-gray-800 w-full aspect-video animate-pulse"></div>
                            </div>
                        ) : (
                            <div className="px-4 py-12 text-center xl:px-6 xl:py-14">
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${data.key}`}
                                    width="100%"
                                    controls={true}
                                    playing={playVideo}
                                    onPlay={() => setPlayVideo(true)}
                                    onPause={() => setPlayVideo(false)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
