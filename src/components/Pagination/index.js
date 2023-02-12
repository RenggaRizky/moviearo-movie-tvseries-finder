import { usePagination } from "helpers/context/pagination";
import React, { useEffect } from "react";

export default function Pagination() {
    const pagination = usePagination();

    const handleNext = async () => await pagination.nextPage(pagination.page);
    const handlePrev = async () => await pagination.prevPage(pagination.page);
    const handleCurrentPage = async (page) =>
        await pagination.currentPage(page);

    const defaultBtn =
        "px-3 py-2 leading-tight text-white bg-lightblack border border-divider  hover:text-primary hover:border-primary transition-all delay-100 duration-100 ease-in-out";

    const disabledBtn =
        "px-3 py-2 leading-tight text-divider bg-darkblack border border-divider";

    const activeBtn =
        "z-10 mx-1 px-3 py-2 leading-tight text-primary border-2 border-primary bg-lightblack";

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pagination.page]);

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center gap-x-1.5 ">
                <li>
                    <button
                        className={[
                            pagination.page === 1 ? disabledBtn : defaultBtn,
                            "block ml-0",
                        ].join(" ")}
                        onClick={handlePrev}
                        disabled={pagination.page === 1 ? true : false}
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
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <button
                        className={
                            pagination.page === 1 ? activeBtn : defaultBtn
                        }
                        onClick={() => handleCurrentPage(1)}
                    >
                        1
                    </button>
                </li>
                <li>
                    <button
                        className={
                            pagination.page === 2 ? activeBtn : defaultBtn
                        }
                        onClick={() => handleCurrentPage(2)}
                    >
                        2
                    </button>
                </li>
                <li>
                    <button
                        className={
                            pagination.page === 3 ? activeBtn : defaultBtn
                        }
                        onClick={() => handleCurrentPage(3)}
                    >
                        3
                    </button>
                </li>
                <li>
                    <button
                        className={
                            pagination.page === 4 ? activeBtn : defaultBtn
                        }
                        onClick={() => handleCurrentPage(4)}
                    >
                        4
                    </button>
                </li>
                <li>
                    <button
                        className={
                            pagination.page === 5 ? activeBtn : defaultBtn
                        }
                        onClick={() => handleCurrentPage(5)}
                    >
                        5
                    </button>
                </li>
                <li>
                    <button
                        className={[
                            pagination.page === 5 ? disabledBtn : defaultBtn,
                            "block ",
                        ].join(" ")}
                        onClick={handleNext}
                        disabled={pagination.page === 5 ? true : false}
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
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
