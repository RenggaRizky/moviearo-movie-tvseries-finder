import React from "react";

const BtnPrimary = ({ value, onClick, disabled = false }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="focus:outline-none text-white bg-primary hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 w-full disabled:bg-gray-600 disabled:text-gray-400"
        >
            {value}
        </button>
    );
};

export default BtnPrimary;
