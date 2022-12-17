import React from "react";
import { Link } from "react-router-dom";

export default function TitleSection({ title, viewAll, link }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
                <div className="h-5 bg-primary w-1 " />
                <h2 className="uppercase text-white font-medium text-xl md:text-lg lg:text-xl xl:text-2xl">
                    {title}
                </h2>
            </div>
            {viewAll && (
                <Link
                    to={link}
                    className="text-xs font-medium text-blue-600 uppercase md:text-[0.625rem] lg:text-sm"
                >
                    Lihat semua
                </Link>
            )}
        </div>
    );
}
