import React, { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

const sortTypeValue = {
    default: "default",
    popularityDesc: "popularity.desc",
    popularityAsc: "popularity.asc",
    revenueDesc: "revenue.desc",
    revenueAsc: "revenue.asc",
    originalTitleDesc: "original_title.desc",
    originalTitleAsc: "original_title.asc",
    voteAverageDesc: "vote_average.desc",
    voteAverageAsc: "vote_average.asc",
};

const filterAction = {
    CHANGE_SORT: "CHANGE_SORT",
};

const filterReducer = (state, action) => {
    switch (action.type) {
        case filterAction.CHANGE_SORT:
            return {
                ...state,
                sort: action.payload.type,
            };
        default:
            break;
    }
};

export default function FilterProvider({ children }) {
    const initialStateFilter = {
        sort: sortTypeValue.default,
    };

    const [state, dispatch] = useReducer(filterReducer, initialStateFilter);

    const sortType = (type) => {
        dispatch({ type: filterAction.CHANGE_SORT, payload: { type } });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, sortType, ...sortTypeValue }}
        >
            {children}
        </FilterContext.Provider>
    );
}
