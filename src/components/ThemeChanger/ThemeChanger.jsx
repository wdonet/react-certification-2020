import React from "react";
import Toggle from "./Toggle";

class ThemeChanger extends React.Component {
  render() {
    return (
      <div className="theme">
        <div>Dark Mode</div>
        <Toggle />
      </div>
    );
  }
}
