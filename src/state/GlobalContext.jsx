import React from 'react';

const GlobalContext = React.createContext({
  search: '',
  setSearch: () => {},
  theme: '',
  setTheme: () => {},
});

export default GlobalContext;
