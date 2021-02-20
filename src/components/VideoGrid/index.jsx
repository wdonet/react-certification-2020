import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';

const VideoGrid = ({ videos }) => (
  <Styled.Grid data-testid="grid">
    <Styled.Row data-testid="row">
      {videos.map(({ id, snippet }) =>
        id.videoId ? (
          <Styled.Col key={id.videoId}>
            <VideoCard key={id.videoId} snippet={snippet} id={id} />
          </Styled.Col>
        ) : (
          ''
        )
      )}
    </Styled.Row>
  </Styled.Grid>
);

export default VideoGrid;
