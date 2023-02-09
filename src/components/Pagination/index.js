import { usePagination } from "helpers/context/pagination";
import React from "react";

export default function Pagination() {
    const pagination = usePagination();

    const handleNext = async () => await pagination.nextPage(pagination.page);
    const handlePrev = async () => await pagination.prevPage(pagination.page);

    const btnClass =
        "px-3 py-2 leading-tight text-white bg-lightblack border border-divider  hover:text-primary hover:border-primary transition-all delay-100 duration-100 ease-in-out";

    const activeBtnClass =
        "z-10 mx-1 px-3 py-2 leading-tight text-primary border-2 border-primary bg-lightblack";

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center gap-x-1.5 ">
                <li>
                    <button
                        className={`block ml-0 ${btnClass}`}
                        onClick={handlePrev}
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <button className={btnClass}>1</button>
                </li>
                <li>
                    <button className={btnClass}>2</button>
                </li>
                <li>
                    <button aria-current="page" className={activeBtnClass}>
                        3
                    </button>
                </li>
                <li>
                    <button className={btnClass}>4</button>
                </li>
                <li>
                    <button className={btnClass}>5</button>
                </li>
                <li>
                    <button
                        className={`block ${btnClass}`}
                        onClick={handleNext}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
