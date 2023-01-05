import React, { createContext, useContext } from "react";

const TrailerContext = createContext();

export const useTrailer = () => useContext(TrailerContext);

export default function TrailerProvider({ children, value }) {
    return (
        <TrailerContext.Provider value={value}>
            {children}
        </TrailerContext.Provider>
    );
}
