import React, { useCallback, useState } from "react";
import Modal from "components/TrailerModal";
import moment from "moment";
import "moment/locale/id";
export default function MovieVideo({ title, backdrop, date }) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <div className="flex flex-col">
            <Modal className="relative ">
                <div
                    className={[
                        hover ? "hover:scale-100" : "",
                        "aspect-video w-64 relative-hidden group transition-all duration-500 overflow-hidden",
                    ].join(" ")}
                >
                    <div
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        className={[
                            hover ? "group-hover:scale-125" : "",
                            "bg-center bg-cover cursor-pointer h-full w-full absolute transition-all ease-in-out duration-500",
                        ].join(" ")}
                        style={{
                            backgroundImage: `url(${backdrop})`,
                        }}
                    ></div>
                </div>
                <svg
                    className="cursor-pointer absolute top-1/4 left-1/4 translate-x-1/2 text-primary w-1/4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                        fill="currentColor"
                    />
                    <path
                        d="M16 12L10 16.3301V7.66987L16 12Z"
                        fill="currentColor"
                    />
                </svg>
            </Modal>
            <div className="mb-4 mt-6">
                <Modal>
                    <h3 className="cursor-pointer text-white font-semibold text-lg mb-2 truncate text-ellipsis overflow-hidden w-64 md:text-base">
                        {title}
                    </h3>
                </Modal>
                <p className="text-base text-lightgray truncate text-ellipsis overflow-hidden w-64 md:text-sm">
                    {moment(date).format("ll")}
                </p>
            </div>
        </div>
    );
}
