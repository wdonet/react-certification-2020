import React, { useState }from "react";

const SearchContext = React.createContext();

const SearchProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("wizeline")

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {props.children}
    </SearchContext.Provider>
  )
}
export  {  SearchContext, SearchProvider };
    