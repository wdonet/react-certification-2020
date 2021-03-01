import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Search, SearchInput } from './Searchbar.styles';

const Searchbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSearch = () => {
    setIsSearchActive(searchValue ? true : !isSearchActive);
  };

  const search = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleBlur = () => {
    setIsSearchActive(searchValue);
  };

  return (
    <Search onClick={toggleSearch} data-testid="searchbar">
      <IoSearchOutline />
      <form onSubmit={search} data-testid="form-search">
        <SearchInput
          value={searchValue}
          onChange={handleChange}
          onBlur={handleBlur}
          isSearchActive={isSearchActive}
          type="search"
          placeholder="Search"
          data-testid="input-search"
        />
      </form>
    </Search>
  );
};

export default Searchbar;
