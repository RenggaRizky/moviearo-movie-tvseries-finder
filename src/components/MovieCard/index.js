import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
import blankMovie from "assets/images/blank-movie.png";

export default function MovieCard({ id, title, picture, score, date, link }) {
    const [hover, setHover] = useState(false);

    // ketika pointer berada di suatu element atau child element tersebut
    const handleMouseOver = useCallback(() => setHover(true), []);

    // ketika pointer keluar dari suatu element atau child element tersebut
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <div className="flex flex-col items-center">
            <Link
                to={link}
                state={{ id }}
                className={[
                    hover ? "hover:scale-100" : "",
                    "mb-4 relative lg:mb-6 w-36 h-52 lg:w-44 lg:h-64 overflow-hidden transition-all duration-500 group",
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
                        backgroundImage: picture
                            ? `url(https://image.tmdb.org/t/p/original/${picture})`
                            : `url(${blankMovie})`,
                    }}
                ></div>
                <div
                    className={[
                        score ? "px-1.5" : "px-3",
                        "absolute top-2 right-2 bg-primary w-fit py-1 text-white font-bold border border-solid border-white",
                    ].join(" ")}
                >
                    {score ? score.toFixed(1) * 10 : "-"}
                </div>
            </Link>
            <div className="mb-4 lg:mb-6">
                <Link to={link} state={{ id }}>
                    <h3 className="mb-2 cursor-pointer text-white font-semibold text-sm  truncate overflow-hidden w-36 text-ellipsis lg:w-44 lg:text-base">
                        {title ? title : "-"}
                    </h3>
                </Link>
                <p className="text-lightgray text-xs lg:text-sm">
                    {date ? moment(date).format("ll") : "-"}
                </p>
            </div>
        </div>
    );
}
