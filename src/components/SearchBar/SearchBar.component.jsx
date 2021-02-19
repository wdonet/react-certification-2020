import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBarWrapper, SearchBarIcon, SearchBarInput } from './SearchBar.styled';

function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchBarIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBarIcon>
      <SearchBarInput placeholder="Search..." />
    </SearchBarWrapper>
  );
}

export default SearchBar;
