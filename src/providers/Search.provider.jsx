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
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [selectedVideoDescription, setSelectedVideoDescription] = useState('');

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

  const updateSelectedVideo = useCallback((e) => {
    console.log('videoUodated');
    const { id, title, description } = e.currentTarget.dataset;
    setSelectedVideoId(id);
    setSelectedVideoTitle(title);
    setSelectedVideoDescription(description);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        termChanged,
        searchSubmited,
        updateSelectedVideo,
        searchTerm,
        selectedVideoId,
        selectedVideoTitle,
        selectedVideoDescription,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export { useSearch };
export default SearchProvider;
