import React from "react";
export function Avatar({ avatar }) {
    return (
        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-lightgray rounded-full">
            <span className="font-medium text-lightblack uppercase">
                {avatar.slice(0, 2)}
            </span>
        </div>
    );
}
