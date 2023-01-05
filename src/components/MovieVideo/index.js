import React, { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import ReactPlayer from "react-player";

export default function MovieVideo({ id, name, date }) {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="w-[22.5rem] h-52">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={playVideo}
                    onPlay={() => setPlayVideo(true)}
                    onPause={() => setPlayVideo(false)}
                />
            </div>
            <div className="mb-4 mt-6">
                <h3 className="text-white font-semibold text-lg mb-2 truncate text-ellipsis overflow-hidden w-[22.5rem] md:text-base">
                    {name}
                </h3>
                <p className="text-base text-lightgray truncate text-ellipsis overflow-hidden w-[22.5rem] md:text-sm">
                    {moment(date).format("ll")}
                </p>
            </div>
        </div>
    );
}
