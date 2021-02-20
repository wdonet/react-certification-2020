import React from 'react';
import { HeaderPanel, SearchInput, ControlPanel, Toggle } from './styled';

const Header = () => {
  return (
    <HeaderPanel data-testid="header">
      <div className="ui icon button toggle-button">
        <i className="bars icon"></i>
      </div>
      <SearchInput type="text" className="search-input" placeholder="Search..." />
      <ControlPanel>
        <Toggle className="ui toggle checkbox">
          <input type="checkbox" />
          <label>Dark mode</label>
        </Toggle>
        <div className="ui red button">
          <i className="sign in alternate icon"></i>
          Sign In
        </div>
      </ControlPanel>
    </HeaderPanel>
  );
};

export default Header;
