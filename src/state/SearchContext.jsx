import React from 'react';

const SearchContext = React.createContext({
  search: 'test',
  setSearch: () => {},
});

export default SearchContext;
