import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
export default function MovieCard({ title, picture, score, date, link }) {
    const [hover, setHover] = useState(false);

    // ketika pointer berada di suatu element atau child element tersebut
    const handleMouseOver = useCallback(() => setHover(true), []);

    // ketika pointer keluar dari suatu element atau child element tersebut
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <div className="flex flex-col">
            <Link
                to={link}
                className={[
                    hover ? "hover:scale-100" : "",
                    "mb-4 relative lg:mb-6 w-36 h-52 lg:w-44 lg:h-64 overflow-hidden transition-all duration-500",
                ].join(" ")}
            >
                <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className={[
                        hover ? "group-hover:scale-125" : "",
                        "absolute bg-cover bg-center h-full w-full transition-all ease-in-out duration-500",
                    ].join(" ")}
                    style={{
                        backgroundImage: `url(${picture})`,
                    }}
                ></div>

                <div className="absolute top-2 right-2 bg-primary w-fit px-1.5 py-1 text-white font-bold border border-solid border-white">
                    {score}
                </div>
            </Link>
            <div className="mb-4 lg:mb-6">
                <Link to={link} className="">
                    <h3 className="mb-2 cursor-pointer text-white font-semibold text-sm  truncate overflow-hidden w-36 text-ellipsis lg:w-44 lg:text-base">
                        {title}
                    </h3>
                </Link>
                <p className="text-lightgray text-xs lg:text-sm">
                    {moment(date).format("ll")}
                </p>
            </div>
        </div>
    );
}
