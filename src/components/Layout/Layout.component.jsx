import React from 'react';
import NavigationBar from '../NavigationBar';

function Layout({ children }) {
  return (
    <div className="container-fluid">
      <header>
        <NavigationBar />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
