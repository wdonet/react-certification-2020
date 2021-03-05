import React from 'react';
import Header from '../Header';
import History from '../../pages/History';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
      <History />
    </div>
  );
}

export default Layout;
