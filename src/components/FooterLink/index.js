import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
export default function FooterLink({ data, title }) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);
    return (
        <div>
            {title && (
                <h3 className="text-white font-medium text-xl mt-8 mb-4 sm:mt-0 md:mb-7">
                    {title}
                </h3>
            )}
            <ul className="space-y-1 lg:space-y-2">
                {data.map((data) => {
                    return (
                        <li
                            key={data}
                            className="text-lightgray text-base capitalize lg:text-sm"
                        >
                            <Link
                                to="/"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                className={hover ? "underline" : ""}
                            >
                                {data}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
