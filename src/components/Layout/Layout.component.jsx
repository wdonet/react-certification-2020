import React from 'react';

// import './Layout.styles.css';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return <Container>{children}</Container>;
  // return <main className="container">{children}</main>;
}

export default Layout;
