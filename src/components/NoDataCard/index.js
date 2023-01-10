import React from "react";

export default function NoDataCard({ message }) {
    return (
        <div className="p-12 bg-lightblack shadow-md w-full mb-6 text-center lg:p-16">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="16"
                // height="16"
                fill="currentColor"
                className="text-primary w-9 mx-auto block mb-4 md:w-12"
                viewBox="0 0 16 16"
            >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <p className="text-lightgray text-sm capitalize md:text-base">
                {message}
            </p>
        </div>
    );
}
