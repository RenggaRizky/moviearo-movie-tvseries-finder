import React, { useCallback, useState } from 'react'
import eximg from 'assets/images/eximg.png'
import { Link } from 'react-router-dom';

export default function MovieCardHorizontal() {
    const [hover, setHover] = useState(false);
    const handleMouseOver = useCallback(() => setHover(true), []);
    const handleMouseOut = useCallback(() => setHover(false), []);


    return (
        <div className='flex items-start gap-x-4'>
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
                    // style={{
                    //     backgroundImage: `url(${picture})`,
                    // }}
                    style={{
                        backgroundImage: `url(${eximg})`,
                    }}
                ></div>

                <div className="absolute top-2 right-2 bg-primary w-fit px-1.5 py-1 text-white font-bold border border-solid border-white">
                    {/* {score.toFixed(1)} */}
                    78
                </div>
            </Link>
            <div className='flex flex-col h-28 gap-y-0.5'>
                    {/* <Link to={link} state={{ id }}> */}
                        <h3 className="mb-2 cursor-pointer text-white font-semibold text-sm  truncate overflow-hidden w-56 text-ellipsis lg:text-base">
                            {/* {title} */}
                            In in in sint et tempor In in in sint et tempor In in in sint et tempor
                        </h3>
                    {/* </Link> */}
                    <p className="text-xs lg:text-sm text-primary font-medium">
                        Film
                    </p>
                <p className="text-lightgray text-xs lg:text-sm ">
                    Aute Lorem deserunt dolor commodo occaecat consequat. Eiusmod duis officia nulla nisi.
                </p>
            </div>
        </div>
    )
}
