import React from "react";
import VideoList from "./VideoList";

class Videos extends React.Component {
  render() {
    return (
      <div className="videos">
        <VideoList text="Search" />
      </div>
    );
  }
}
