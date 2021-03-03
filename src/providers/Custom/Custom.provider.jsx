import React, { useState, useContext, createContext } from 'react';

import videosMock from '../../youtube-videos-mock.json';

export const CustomContext = createContext(null);

export const useCustom = () => {
  const context = useContext(CustomContext);

  if (!context) {
    throw new Error(`Can't use "useCustom" without a CustomProvider!`);
  }

  return context;
};

const CustomProvider = ({ children }) => {
  const mock = { ...videosMock, items: videosMock.items.slice(1) };

  const [searchResult, setSearchResult] = useState(mock);
  const [darkMode, setDarkMode] = useState(false);

  const updateSearchResult = (res) => {
    if (res?.items?.length) setSearchResult(res);
  };

  const switchDarkMode = () => setDarkMode((s) => !s);

  return (
    <CustomContext.Provider
      value={{ searchResult, updateSearchResult, darkMode, switchDarkMode }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
