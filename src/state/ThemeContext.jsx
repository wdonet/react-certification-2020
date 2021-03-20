import React from 'react';

const ThemeContext = React.createContext({
  theme: {},
  dispatchTheme: () => {},
});

export default ThemeContext;
