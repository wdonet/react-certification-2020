import React from 'react';
import Header from '../Header';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
