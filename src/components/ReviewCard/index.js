import React from "react";
import { Avatar } from "components/Avatar";
import moment from "moment";
import "moment/locale/id";

export default function ReviewCard({ author, content, createdAt, avatar }) {
    return (
        <div className="p-6 bg-lightblack shadow-md w-full mb-6 lg:basis-[49%]">
            <div className="mb-6 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <Avatar avatar={avatar} />
                    <div>
                        <h4 className="text-white font-semibold text-sm">
                            {author}
                        </h4>
                        <p className="text-lightgray font-light text-xs">
                            {moment(createdAt).format("ll")}
                        </p>
                    </div>
                </div>

                <svg
                    style={{ color: "rgb(252, 163, 17)" }}
                    className="w-9"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                >
                    <rect fill="none"></rect>
                    <path
                        d="M116,72v88a48,48,0,0,1-48,48,8,8,0,0,1,0-16,32.1,32.1,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32.1,32.1,0,0,1-32,32,8,8,0,0,0,0,16,48,48,0,0,0,48-48V72A16,16,0,0,0,216,56Z"
                        fill="#fca311"
                    ></path>
                </svg>
            </div>

            <p className="text-lightgray text-sm overflow-hidden">{content}</p>
        </div>
    );
}
