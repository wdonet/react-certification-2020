import React from 'react';
import Header from '../Header';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
