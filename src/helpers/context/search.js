import React, { createContext, useContext } from 'react'

const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext)

export default function SearchProvider({ children, value }) {
  return (
    <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
  )
}
