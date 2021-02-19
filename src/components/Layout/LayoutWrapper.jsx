import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

const LayoutWrapper = () => {
  return (
    <div data-testid="layout-wrapper">
      <Navbar />
      <MainContent />
    </div>
  );
};

export default LayoutWrapper;
