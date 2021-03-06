import React from 'react';
import VideoCard from '../VideoCard';
import { Grid, Row, Col } from './styled';

const VideoGrid = ({ videos }) => (
  <Grid data-testid="grid">
    <Row data-testid="row">
      {videos.map((video) =>
        video.id.videoId ? (
          <Col key={video.id.videoId}>
            <VideoCard key={video.id.videoId} video={video} />
          </Col>
        ) : (
          ''
        )
      )}
    </Row>
  </Grid>
);

export default VideoGrid;
