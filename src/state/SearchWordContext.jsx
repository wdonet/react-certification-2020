import React from 'react';

const SearchWordContext = React.createContext({
  state: '',
  dispatch: () => {},
});

export default SearchWordContext;
