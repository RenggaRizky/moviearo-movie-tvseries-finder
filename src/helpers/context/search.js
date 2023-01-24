import React, { createContext, useContext, useReducer } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext);

const initialStateSearch = {
    query: "",
    loading: true,
};

const searchAction = {
    SET_LOADING: "SET_LOADING",
    SET_QUERY: "SET_QUERY",
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case searchAction.SET_QUERY:
            return {
                ...state,
                query: action.payload,
                loading: false,
            };
        default:
            break;
    }
};

export default function SearchProvider({ children }) {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(searchReducer, initialStateSearch);

    const submit = (query) => {
        dispatch({ type: searchAction.SET_QUERY, payload: query });

        navigate({
            pathname: "search",
            search: createSearchParams({
                query: query,
            }).toString(),
        });
    };
    return (
        <SearchContext.Provider value={{ ...state, submit }}>
            {children}
        </SearchContext.Provider>
    );
}
