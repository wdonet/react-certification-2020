import React from 'react';
import List from '../List';
import ThemeChanger from '../ThemeChanger';

const Sidebar = () => {
  const sidebarLinks = [{ name: 'Home' }, { name: 'Favorites' }];

  return (
    <div className="sidebar">
      <List links={sidebarLinks} />
      <ThemeChanger />
    </div>
  );
};

export default Sidebar;
