import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/id";
export default function CastCard({ name, profile, character }) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <div className="flex flex-col">
            <div
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
                        backgroundImage: `url(${profile})`,
                    }}
                ></div>
            </div>
            <div className="mb-4 lg:mb-6">
                <h3 className="mb-2 text-white font-semibold text-sm  truncate overflow-hidden w-36 text-ellipsis lg:w-44 lg:text-base">
                    {name}
                </h3>
                <p className="text-lightgray text-xs lg:text-sm">{character}</p>
            </div>
        </div>
    );
}
