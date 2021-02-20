import React from "react";

function List(props) {
  const links = props.sidebarLinks;
  const listItems = links.map((links) => (
    <ListItem key={props.number.toString()} value={links} />
  ));
  return <ul className="sidebar-item">{listItems}</ul>;
}

function ListItem(props) {
  return <li>{props.value}</li>;
}