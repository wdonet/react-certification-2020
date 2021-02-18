import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

function AppNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href={props.navLinkHref}>{props.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Link href={props.navLinkHref}>{props.navLinkText}</Nav.Link>
        </Nav>
        <Nav>
          <Form inline>
            <FormControl bg="dark" type="text" placeholder="Search" />
          </Form>
          <NavDropdown id="settings-dropdown" title={<FaCog />}>
            <NavDropdown.Item href="#action/3.4">Theme 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Theme 2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
