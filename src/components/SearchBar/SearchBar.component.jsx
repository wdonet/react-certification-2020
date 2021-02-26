import React from 'react';
import { Form, Input, MagnifyingGlass } from './styled';

const SearchBar = () => {
  return (
    <Form>
      <MagnifyingGlass>
        <span role="img" aria-label="magnifying-glass">
          🔎
        </span>
      </MagnifyingGlass>
      <Input />
    </Form>
  );
};

export default SearchBar;
