import React from 'react';
import {
  Container,
  Row,
  VideoPlayer,
  Col,
  VideoInfo,
  Title,
  Description,
  ColGrow,
  RelatedVideosContainer,
  VideoItem,
  Overlay,
  VideoPreview,
  VideoTitle,
  VideoDescription,
  VideoTitleDescWrap,
} from './VideoDetail.styled';
import { useYouTube } from '../YouTubeProvider';
import useRelatedVideos from '../useRelatedVideos';

const RelatedVideos = ({ relatedTo }) => {
  const { dispatch } = useYouTube();
  const { isLoading, error, videos } = useRelatedVideos({
    relatedToVideoId: relatedTo.id.videoId,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <RelatedVideosContainer>
      {error && <div>Error. Displaying mock data...</div>}
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onClick={() => {
            dispatch({ type: 'currentVideo', payload: video });
          }}
        >
          <VideoPreview src={video.snippet.thumbnails.default.url} />
          <VideoTitleDescWrap>
            <VideoTitle>{video.snippet.title}</VideoTitle>
            <VideoDescription>{video.snippet.description}</VideoDescription>
          </VideoTitleDescWrap>
        </VideoItem>
      ))}
    </RelatedVideosContainer>
  );
};

const VideoDetail = () => {
  const { state, dispatch } = useYouTube();
  const { currentVideo } = state;
  return (
    <Overlay
      onClick={() => {
        dispatch({ type: 'closeCurrentVideo' });
      }}
    >
      <Container onClick={(event) => event.stopPropagation()}>
        <Row>
          <Col>
            <VideoPlayer
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <VideoInfo>
              <Title>{currentVideo.snippet.title}</Title>
              <Description>{currentVideo.snippet.description}</Description>
            </VideoInfo>
          </Col>
          <ColGrow>
            <RelatedVideos relatedTo={currentVideo} />
          </ColGrow>
        </Row>
      </Container>
    </Overlay>
  );
};

export default VideoDetail;
