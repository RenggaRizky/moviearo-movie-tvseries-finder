import React from "react";
import { Link } from "react-router-dom";
export default function MovieLink({
    id,
    title,
    score,
    link,
    rank = false,
    rankNum,
}) {
    return (
        <div>
            <div className="flex justify-between items-center mb-6 md:mb-4">
                {rank && (
                    <h3 className=" pl-3 pr-4 py-1 font-bold text-lg">
                        {rankNum}.
                    </h3>
                )}
                <Link to={link} state={{ id }}>
                    <h3
                        className={[
                            rank ? "sm:w-80" : "sm:w-auto font-semibold",
                            "cursor-pointer text-white  text-sm  truncate overflow-hidden w-80 text-ellipsis ",
                        ].join(" ")}
                    >
                        {title}
                    </h3>
                </Link>

                {!rank && (
                    <div className="bg-primary w-fit px-1.5 py-1 text-white font-bold border border-solid border-white">
                        {score}
                    </div>
                )}
            </div>

            <hr className="border-divider mb-10 md:mb-8" />
        </div>
    );
}
