import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import he from 'he';
import Grid from '@material-ui/core/Grid';
import React, { useContext } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import ThemeContext from '../../state/ThemeContext';

const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

const VideoCard = ({ video, selectVideo }) => {
  const { theme } = useContext(ThemeContext);
  const StyledCard = styled(Card)`
    height: 350px;
    ${() => theme === 'dark' && `background: gray; color: white;`}
  `;

  const {
    etag,
    id: { videoId },
    snippet: {
      title,
      description,
      thumbnails: { high: { url: thumbnailsHigh } = {} } = {},
    } = {},
  } = video;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      id={`video-${etag}`}
      onClick={() => selectVideo(videoId)}
    >
      <StyledCard>
        <CardActionArea>
          <StyledCardMedia image={thumbnailsHigh} title="image" />
          <CardContent>
            <h2>{he.decode(title || '')}</h2>
            <p>{he.decode(description || '')}</p>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};

export default VideoCard;
