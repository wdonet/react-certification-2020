import React from "react";
import List from "./List";
import ThemeChanger from "./ThemeChanger";

const sidebarLinks = ["Home", "Favorites"];

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <List links={sidebarLinks} />
        <ThemeChanger />
      </div>
    );
  }
}