import { debounce } from 'debounce';
import React, { useState, useContext, useCallback } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  // const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   const lastAuthState = storage.get(AUTH_STORAGE_KEY);
  //   const isAuthenticated = Boolean(lastAuthState);

  //   setAuthenticated(isAuthenticated);
  // }, []);

  const [searchTerm, setSearchterm] = useState('wizeline');

  const debouncedSearch = debounce((v) => {
    const searchFor = v === '' ? 'wizeline' : v;
    setSearchterm(searchFor);
  }, 700);

  const termChanged = useCallback(
    (e) => {
      const { value } = e.target;
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const searchSubmited = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <SearchContext.Provider value={{ termChanged, searchSubmited, searchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
export { useSearch };
export default SearchProvider;
