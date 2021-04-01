import React, { useEffect, useState } from 'react';
import { useYouTube } from '../../providers/YouTubeAPI';
import { Title, Details, VideoDetailsContainer } from './VideoDetails.styled';

function VideoDetails({ videoId }) {
  const [details, setDetails] = useState({ title: '', description: '' });
  const { getVideoDetails } = useYouTube();

  useEffect(() => {
    getVideoDetails(videoId).then(
      ({
        items: [
          {
            snippet: { title, description },
          },
        ],
      }) => {
        setDetails({ title, description });
      }
    );
  }, [getVideoDetails, videoId]);

  const { title, description } = details;

  return (
    <VideoDetailsContainer>
      <Title aria-label="title">{title}</Title>
      <Details role="region" aria-label="description">
        {description}
      </Details>
    </VideoDetailsContainer>
  );
}

export default VideoDetails;
