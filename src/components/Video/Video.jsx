import React from "react";

class Video extends React.Component {
  render() {
    return (
      <li className="video">
        <div className="thumbnail">
          <img src={video.thumbnail} alt={video.alt} />
        </div>
        <div className="video-title">{video.title}</div>
        <div className="video-author">{video.author}</div>
        <div className="video-duration">{video.duration}</div>
      </li>
    );
  }
}