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
} from './VideoDetail.styled';
import { useYouTube } from '../YouTubeProvider';
import useRelatedVideos from '../useRelatedVideos';

const RelatedVideos = ({ relatedTo }) => {
  const { isLoading, error, videos } = useRelatedVideos({
    relatedToVideoId: relatedTo.id.videoId,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <RelatedVideosContainer>
      here
      {videos.map((video) => (
        <VideoItem key={video.id.videoId}>
          <Col>Foto</Col>
          <ColGrow>Descripcion alksdjfalksjdfh</ColGrow>
        </VideoItem>
      ))}
    </RelatedVideosContainer>
  );
};

const VideoDetail = () => {
  const { state } = useYouTube();
  const { currentVideo } = state;
  console.log('currentVideo', currentVideo);
  return (
    <Container>
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
  );
};

export default VideoDetail;
