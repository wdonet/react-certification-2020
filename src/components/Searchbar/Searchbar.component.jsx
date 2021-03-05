import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useHistory } from 'react-router';
import { useSearch } from '../../providers/Search/Search.provider';
import { Search, SearchInput } from './Searchbar.styles';

const Searchbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const history = useHistory();
  const { search, searchQuery } = useSearch();
  const inputEl = useRef(searchQuery);

  useEffect(() => {
    inputEl.current.value = searchQuery;
  }, [searchQuery]);

  const toggleSearch = () => {
    setIsSearchActive(searchQuery ? true : !isSearchActive);
    inputEl.current.focus();
  };

  const newSearch = (query) => {
    setIsSearchActive(query);
    search(query);
    history.push('/');
  };

  const submitSearch = (event) => {
    event.preventDefault();
    newSearch(inputEl.current.value);
  };

  const handleBlur = () => {
    newSearch(inputEl.current.value);
  };

  return (
    <Search onClick={toggleSearch} data-testid="searchbar">
      <IoSearchOutline />
      <form onSubmit={submitSearch} data-testid="form-search">
        <SearchInput
          onBlur={handleBlur}
          isSearchActive={isSearchActive}
          type="search"
          placeholder="Search"
          ref={inputEl}
          data-testid="input-search"
        />
      </form>
    </Search>
  );
};

export default Searchbar;
