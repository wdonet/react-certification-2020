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

  const [searchTerm, setSearchterm] = useState('');

  const termChanged = useCallback((e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setSearchterm(value);
  }, []);
  const searchSubmited = useCallback((e) => {
    e.preventDefault();
    console.log('form sent');
  }, []);

  return (
    <SearchContext.Provider value={{ termChanged, searchSubmited, searchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
export { useSearch };
export default SearchProvider;
