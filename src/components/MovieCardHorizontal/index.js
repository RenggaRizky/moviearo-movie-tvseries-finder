import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCardHorizontal({
    picture,
    media,
    score,
    title,
    desc,
}) {
    const [hover, setHover] = useState(false);
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);

    return (
        <>
            <div className="flex items-start gap-x-4">
                <Link
                    // to={link}
                    // state={{ id }}
                    className={[
                        hover ? "hover:scale-100" : "",
                        "mb-4 relative lg:mb-6 w-60 h-28 overflow-hidden transition-all duration-500 group",
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
                <div className="flex flex-col h-28 gap-y-0.5 justify-center">
                    {/* <Link to={link} state={{ id }}> */}
                    <h3 className="cursor-pointer text-white font-semibold text-sm  truncate overflow-hidden w-56 text-ellipsis lg:text-base">
                        {title}
                    </h3>
                    {/* </Link> */}

                    <p className="text-xs lg:text-sm text-primary font-medium capitalize">
                        {media === "movie" ? "Film" : "serial TV"}
                    </p>
                </div>
            </div>
            <hr className="border-divider mb-4" />
        </>
    );
}
