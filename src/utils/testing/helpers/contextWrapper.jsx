import React from 'react';

const contextWrapper = (
  ContextType = React.createContext({}),
  value,
  Component = <div />
) => <ContextType.Provider value={value}>{Component}</ContextType.Provider>;

export default contextWrapper;
