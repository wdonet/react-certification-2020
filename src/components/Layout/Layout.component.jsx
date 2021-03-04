import React from 'react';

import NavBar from '../NavBar/NavBar.component';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
    </>
  )
}

export default Layout;
