import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useGlobalState } from '../../providers/GlobalState/Provider';

import { YOUTUBE_BASE_URL } from '../../utils/constants';
import RelatedVideoItem from '../RelatedVideoItem';
import {
  BigCol,
  FavoritesButton,
  Row,
  SmallCol,
  TextVideoContainer,
  Title,
  VideoFrame,
  Description,
} from './VideoDetails.styles';

const VideoDetails = ({ videoId, description, title, videos }) => {
  const { state } = useGlobalState();
  const { isThemeLight } = state;

  const renderedVideos = videos
    .filter((video, index) => video.id.videoId !== videoId && index < 9)
    .map((video) => {
      return <RelatedVideoItem key={video.id.videoId} video={video} videos={videos} />;
    });

  return (
    <Row>
      <BigCol>
        <VideoFrame
          title="video-player"
          src={YOUTUBE_BASE_URL + videoId}
          allowFullScreen
        />
        <TextVideoContainer>
          <Title>{title}</Title>
          <FavoritesButton isThemeLight={isThemeLight}>
            Add To Favorites <Icon name="favorite" />
          </FavoritesButton>
        </TextVideoContainer>
        <hr />
        <Description>{description}</Description>
      </BigCol>
      <SmallCol>{renderedVideos}</SmallCol>
    </Row>
  );
};

export default VideoDetails;
