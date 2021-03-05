import React from 'react';
import SearchContext from '../providers/SearchContext';
import useSearchAPI from '../hooks/useSearchAPI';

export const SearchWrapper = ({ children }) => {
  const { search, videos } = useSearchAPI();

  return (
    <SearchContext.Provider value={{ search, videos }}>{children}</SearchContext.Provider>
  );
};
