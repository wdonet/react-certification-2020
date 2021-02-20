import React from "react";
import Button from "./Button";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="header-search">
        <input name="header_text" value="🎥  Search for videos" />
        <Button text="Search" />
      </div>
    );
  }
}