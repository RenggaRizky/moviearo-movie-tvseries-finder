import React from "react";
import { Link } from "react-router-dom";
export default function MovieLink({ title, score, link }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-6 md:mb-4">
                <Link to={link}>
                    <h3 className="cursor-pointer text-white font-semibold text-sm truncate overflow-hidden text-ellipsis">
                        {title}
                    </h3>
                </Link>
                <div className="bg-primary w-fit px-1.5 py-1 text-white font-bold border border-solid border-white">
                    {score}
                </div>
            </div>

            <hr className="border-divider mb-10 md:mb-8" />
        </div>
    );
}
