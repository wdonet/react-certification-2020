import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className="header-logo">
        <img src={this.props.logo} alt={this.props.logo} />
      </div>
    );
  }
}