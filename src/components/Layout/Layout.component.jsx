import React from 'react';

import './Layout.styled.css';

function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
