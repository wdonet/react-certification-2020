import React from 'react';
import SearchFieldStyled from './SearchField.styled';

const SearchField = ({ placeholder }) => {
  return <SearchFieldStyled type="text" placeholder={placeholder} />;
};

export default SearchField;
