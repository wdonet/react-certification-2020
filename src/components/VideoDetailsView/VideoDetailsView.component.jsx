import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
// import videoDetails from '../../mocks/youtube-video-details-view.mock.json';
import useVideoList from '../../hooks/useVideoList';

const fetchVideoDetails = async ({ id }) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player,snippet&key=${apiKey}&id=${id}`,
  );
  const {
    items: [video],
    error: { message } = {},
  } = await videosRequest.json();

  if (message) {
    console.error(message);
    alert(message);
    return [];
  }

  return video || {};
};

const VideoPlayer = ({ className, video }) => {
  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

const StyledVideoPlayer = styled(VideoPlayer)`
  iframe {
    width: 100%;
    height: 60vh;
  }

  p {
    color: rgba(169, 169, 169, 1);
  }
`;

const RelatedVideos = ({ className, video, selectVideoId }) => {
  const videos = useVideoList('', video.id.videoId);

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

const VideoDetailsView = ({ id }) => {
  const [videoId, setVideoId] = useState(id);
  const [video, setVideo] = useState({
    id: { videoId: '' },
    player: { embedHtml: '' },
    snippet: { title: '', description: '' },
  });

  console.log(videoId);
  useEffect(() => {
    fetchVideoDetails({ id }).then((videoDetails) => {
      setVideo(videoDetails);
    });
    // setVideo(videoDetails[id].items[0]);
  }, [videoId]);

  return (
    <>
      <Grid container>
        <Grid item md={9}>
          <StyledVideoPlayer video={video} />
        </Grid>
        <Grid item md={3}>
          <StyledRelatedVideos video={video} selectVideoId={setVideoId} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetailsView;
