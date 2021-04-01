import React from 'react';
import { useParams } from 'react-router';
import Player from '../../components/Player';
import VideoDetails from '../../components/VideoDetails';
import VideoGrid from '../../components/VideoGrid';
import { VideoContainer } from './Video.styled';

function Video() {
  const { videoId } = useParams();

  return (
    <>
      <VideoContainer>
        <Player videoId={videoId} />
        <VideoDetails videoId={videoId} />
      </VideoContainer>
      <VideoGrid relatedToVideoId={videoId} />
    </>
  );
}

export default Video;
