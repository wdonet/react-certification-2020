import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import React from 'react';
import useVideoList from '../../hooks/useVideoList';

const RelatedVideos = ({ className, videoId, selectVideoId }) => {
  const videos = useVideoList('', videoId);

  return (
    <List className={className}>
      {videos.map((currentVideo) => {
        return (
          <ListItem
            button
            key={currentVideo.etag}
            onClick={() => {
              selectVideoId(currentVideo.id.videoId);
            }}
          >
            <img
              src={
                currentVideo.snippet.thumbnails.high.url
                  ? currentVideo.snippet.thumbnails.high.url
                  : 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
              }
              alt="thumbnail"
            />
            <ListItemText
              primary={currentVideo.snippet.title}
              secondary={currentVideo.snippet.description}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const StyledRelatedVideos = styled(RelatedVideos)`
  height: calc(100vh - 80px);
  overflow: auto;

  img {
    max-width: 100px;
    margin-right: 10px;
  }
  p {
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default StyledRelatedVideos;
