import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCardHorizontal({
    picture,
    media,
    score,
    title,
    year,
    link,
    id,
}) {
    const [hover, setHover] = useState(false);
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <>
            <div className="flex items-start gap-x-4 md:gap-x-6">
                <Link
                    to={link}
                    state={{ id }}
                    className={[
                        hover ? "hover:scale-100" : "",
                        "mb-4 relative lg:mb-6 w-24 h-36 overflow-hidden transition-all duration-500 group",
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
                        {score.toFixed(1)}
                    </div>
                </Link>
                <div className="flex flex-col h-36 gap-y-0.5 justify-center">
                    <Link to={link} state={{ id }}>
                        <h3 className="text-white w-56 cursor-pointer font-semibold text-sm  truncate overflow-hidden  text-ellipsis md:text-base  sm:w-auto">
                            {title}
                        </h3>
                    </Link>
                    <p className="text-xs md:text-sm text-lightgray font-medium capitalize">
                        {media === "movie" ? "Film" : "serial TV"} ({year})
                    </p>
                    <p className="text-xs md:text-sm text-lightgray font-medium capitalize">
                        Ludwig, Richard, Kevin, Lucas
                    </p>
                </div>
            </div>
            <hr className="border-divider mb-4" />
        </>
    );
}
