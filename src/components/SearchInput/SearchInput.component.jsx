import React from 'react';
import { FaSearch } from 'react-icons/fa';
import StyledSearchInput, { InputContainer, InputIcon } from './SearchInput.styles';

function SearchInput() {
  return (
    <InputContainer>
      <InputIcon>
        <FaSearch />
      </InputIcon>
      <StyledSearchInput type="text" placeholder="Search..." />
    </InputContainer>
  );
}

export default SearchInput;
