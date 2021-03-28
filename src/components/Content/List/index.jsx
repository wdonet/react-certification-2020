import React from 'react';

const List = (props) => {
  const sidebarLinks = props.links;

  return (
    <ul>
      {sidebarLinks.map((link) => (
        <li className="sidebar-item" key={link.name}>
          <a href="_blank" className="sidebar-link">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
