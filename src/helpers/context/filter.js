import React, { createContext, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

const sortTypeValue = {
    popularityDesc: "popularity.desc",
    popularityAsc: "popularity.asc",
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
    const location = useLocation();

    const getPath = () => {
        switch (location.pathname) {
            case "/film/populer":
                return sortTypeValue.popularityDesc;
            case "/film/sedang-diputar":
                return sortTypeValue.popularityDesc;
            case "/film/yang-akan-datang":
                return sortTypeValue.popularityDesc;
            case "/film/top-rating":
                return sortTypeValue.popularityDesc;
            case "/serialtv/populer":
                return sortTypeValue.popularityDesc;
            case "/serialtv/hari-ini":
                return sortTypeValue.popularityDesc;
            case "/serialtv/top-rating":
                return sortTypeValue.popularityDesc;
            default:
                break;
        }
    };

    const initialStateFilter = {
        sort: getPath(),
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
