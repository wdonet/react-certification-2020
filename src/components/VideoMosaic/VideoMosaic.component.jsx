import { Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { CustomCardContent, CustomCardContentTitle } from './VideoMosaic.styled';

export function shortenTitle(title) {
  if (title.length > 45) {
    const croppedTitle = title.substring(0, 44);
    return `${croppedTitle}...`;
  }
  return title;
}

function VideoMosaic(props) {
  const { title, thumbnails, description } = props.snippet;
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              src={thumbnails.high.url}
              title={title}
              alt={title}
            />
            <CustomCardContent>
              <CustomCardContentTitle>
                <Typography gutterBottom variant="h5" component="h2">
                  {shortenTitle(title)}
                </Typography>
              </CustomCardContentTitle>
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
