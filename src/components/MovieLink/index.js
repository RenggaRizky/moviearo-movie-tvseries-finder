import React from "react";
import { Link } from "react-router-dom";
export default function MovieLink({ id, title, score, link }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-6 md:mb-4">
                <Link to={link} state={{ id }}>
                    <h3 className='"cursor-pointer text-white  text-sm w-72 truncate overflow-hidden text-ellipsis sm:w-auto font-semibold"'>
                        {title}
                    </h3>
                </Link>

                {/* <div className="bg-primary w-fit px-1.5 py-1 text-white font-bold border border-solid border-white">
                    {score}
                </div> */}

                <div
                    className={[
                        score ? "px-1.5" : "px-3",
                        " bg-primary w-fit py-1 text-white font-bold border border-solid border-white",
                    ].join(" ")}
                >
                    {score ? score.toFixed(1) * 10 : "-"}
                </div>
            </div>

            <hr className="border-divider mb-10 md:mb-8" />
        </div>
    );
}
