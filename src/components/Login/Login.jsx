import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="header-login">
        <div>
          <a href={this.props.signin}>Sign in</a>
        </div>
        <div>
          <img src={this.props.wizelogo} alt={this.props.wizelogo} />
        </div>
      </div>
    );
  }
}