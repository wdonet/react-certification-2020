import React from 'react';
import '../../global.css';
import { FcManager } from 'react-icons/fc';

function NavBar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <input type="text" placeholder="Search" />
      </div>
      <div className="rightSide">
        <FcManager size="60" />
      </div>
    </div>
  );
}

export default NavBar;
