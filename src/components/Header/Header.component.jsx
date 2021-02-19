import React from 'react';

import './Header.styles.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <button>HAMBURGER</button>
        <input placeholder="SEARCH"></input>
        <div className="right-align-container">
          <button>Dark Mode</button>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default Header;
