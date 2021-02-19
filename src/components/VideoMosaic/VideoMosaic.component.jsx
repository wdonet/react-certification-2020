import { Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { CustomCardContent } from './VideoMosaic.styled';

function VideoMosaic(props) {
  const { title, thumbnails, description } = props.snippet;
  return (
    <>
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              src={thumbnails.high.url}
              title={title}
              alt={title}
            />
            <CustomCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CustomCardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default VideoMosaic;
