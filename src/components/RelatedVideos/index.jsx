import React from 'react';
import {useVideoSearch} from '../../providers/VideoSearch';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {API_KEY} from '../../utils/constants';
import YTSerach from 'youtube-api-search';

const RelatedVideos = ({className }) => {

  const {
    relatedVideos,
    setSelectedVideo,
    setRelatedVideos
  } = useVideoSearch();

  const handleVideoSelected = (video) => {
    YTSerach({key: API_KEY, relatedToVideoId: video.id.videoId, maxResults: 4 },function(rVideos){
        setRelatedVideos(rVideos);
    } );
    setSelectedVideo(video);
  };

  return (
    <List className={className}>
      {relatedVideos.map((video) => {
        return (
          video.snippet &&
            <ListItem
              button
              key={video.etag}
              onClick={() => {
                  handleVideoSelected(video);
              }}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
              />
              <ListItemText
                primary={video.snippet.title}
                secondary={video.snippet.description}
              />
            </ListItem>
        );
      })}
    </List>
  );
};

const StyledRelatedVideos = styled(RelatedVideos)`
  overflow: auto;
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .8rem;
  }
  span {
    font-size: .8rem;
  }
  img {
    margin-right: 10px;
    max-width: 110px;
  }
`;

export default StyledRelatedVideos;