import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  render() {
    return (
      <div className="header-button">
        <button onclick={this.handleClick} name="header_button">
          {this.props.text}
        </button>
      </div>
    );
  }
}