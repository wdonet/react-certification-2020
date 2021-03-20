import React, { useContext } from 'react';
import VideoCard from '../VideoCard';
import { Grid, Row, Col } from './styled';
import ThemeContext from '../../state/ThemeContext';

const VideoGrid = ({ videos }) => {
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;

  return (
    <Grid theme={theme} data-testid="grid">
      <Row data-testid="row">
        {videos.map((video) =>
          video.id.videoId ? (
            <Col key={video.id.videoId}>
              <VideoCard video={video} />
            </Col>
          ) : (
            ''
          )
        )}
      </Row>
    </Grid>
  );
};

export default VideoGrid;
