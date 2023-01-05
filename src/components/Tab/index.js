import React from "react";

export default function Tab({
    tabValue,
    setTabValue,
    defaultChecked,
    value,
    group,
}) {
    return (
        <>
            <label
                htmlFor={value}
                className={[
                    tabValue === value
                        ? "text-primary border-b-2 border-primary border-solid"
                        : "text-lightgray hover:text-gray-400",
                    "uppercase p-2 cursor-pointer text-sm transition-all delay-150 duration-150 ease-in-out",
                ].join(" ")}
                onClick={() => setTabValue(value)}
            >
                {value}
            </label>
            <input
                className="hidden"
                type="radio"
                name={group}
                value={value}
                id={value}
                defaultChecked={defaultChecked}
            />
        </>
    );
}
