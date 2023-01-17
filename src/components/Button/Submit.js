import React from "react";

export default function BtnSubmit({ value }) {
    return (
        <input
            type="submit"
            value={value}
            className="focus:outline-none text-white bg-primary hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 w-full"
        />
    );
}
