import React, { createContext, useContext, useReducer } from "react";

const PaginationContext = createContext();
export const usePagination = () => useContext(PaginationContext);

const initialStatePage = {
    page: 1,
    disablePrev: false,
    disableNext: false,
};

const paginationAction = {
    NEXT_PAGE: "NEXT_PAGE",
    PREV_PAGE: "PREV_PAGE",
    CURRENT_PAGE: "CURRENT_PAGE",
};

const pageReducer = (state, action) => {
    switch (action.type) {
        case paginationAction.NEXT_PAGE:
            return {
                ...state,
                page: action.payload < 5 ? action.payload + 1 : action.payload,
            };
        case paginationAction.PREV_PAGE:
            return {
                ...state,
                page: action.payload > 1 ? action.payload - 1 : action.payload,
            };
        case paginationAction.CURRENT_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            break;
    }
};

export default function PaginationProvider({ children }) {
    const [state, dispatch] = useReducer(pageReducer, initialStatePage);

    const nextPage = (page) =>
        dispatch({ type: paginationAction.NEXT_PAGE, payload: page });
    const prevPage = (page) =>
        dispatch({ type: paginationAction.PREV_PAGE, payload: page });
    const currentPage = (page) => {
        dispatch({ type: paginationAction.CURRENT_PAGE, payload: page });
    };

    return (
        <>
            <PaginationContext.Provider
                value={{ ...state, nextPage, prevPage, currentPage }}
                className="flex flex-col"
            >
                {children}
            </PaginationContext.Provider>
        </>
    );
}
