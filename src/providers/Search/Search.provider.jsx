import React, { useState, useEffect, useCallback } from 'react';

import { SEARCH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const lastSearchQueryState = storage.get(SEARCH_STORAGE_KEY) || 'Music';
    setSearchQuery(lastSearchQueryState);
  }, []);

  const search = useCallback((query) => {
    setSearchQuery(query);
    storage.set(SEARCH_STORAGE_KEY, query);
  }, []);

  return (
    <SearchContext.Provider value={{ search, searchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
