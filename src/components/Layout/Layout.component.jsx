import React from 'react';
import NavigationBar from '../NavigationBar';

function Layout({ children }) {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
