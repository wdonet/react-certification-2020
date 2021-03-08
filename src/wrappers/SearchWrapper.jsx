import React, { useState } from 'react';
import SearchContext from '../providers/SearchContext';
import useSearchAPI from '../hooks/useSearchAPI';

export const SearchWrapper = ({ children }) => {
  const [firstLoad, isFirstLoad] = useState(true);
  const { search, videos } = useSearchAPI();

  if (firstLoad) {
    search();
    isFirstLoad(false);
  }

  return (
    <SearchContext.Provider value={{ search, videos }}>{children}</SearchContext.Provider>
  );
};
