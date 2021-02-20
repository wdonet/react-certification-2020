import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <SearchBar />
        <Login />
      </div>
    );
  }
}