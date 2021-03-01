import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import videoDetails from "../../mocks/youtube-video-details-view.mock.json";

const fetchVideoDetails = async ({ id }) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player,snippet&key=${apiKey}&id=${id}`
  );
  const {
    items: [video],
    error: { message } = {},
  } = await videosRequest.json();

  if (message) {
    console.error(message);
    alert(message);
    return [];
  }

  return video || {};
};

const VideoPlayer = ({ className, video }) => {
  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

const StyledVideoPlayer = styled(VideoPlayer)`
  iframe {
    width: 100%;
    height: 60vh;
  }

  p {
    color: rgba(169, 169, 169, 1);
  }
`;

const VideoDetailsView = ({ id }) => {
  const [video, setVideo] = useState({
    player: { embedHtml: '' },
    snippet: { title: '', description: '' },
  });

  useEffect(() => {
    fetchVideoDetails({ id }).then((videoDetails) => {
      setVideo(videoDetails);
    });
    // setVideo(videoDetails[id]);
  }, [id]);

  return <StyledVideoPlayer video={video} />;
};

export default VideoDetailsView;
