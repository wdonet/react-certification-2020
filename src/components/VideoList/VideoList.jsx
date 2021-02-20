import React from "react";

class VideoList extends React.Component {
  render(props) {
    return <ul className="header-button">{props.videoItems}</ul>;
  }
}