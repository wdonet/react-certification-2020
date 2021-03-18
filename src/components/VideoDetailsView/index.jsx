import React from 'react';
import {useVideoSearch} from '../../providers/VideoSearch';

import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'
import RelatedVideos from '../RelatedVideos';

const VideoDetailsView = () => {

    const {
        selectedVideo,
      } = useVideoSearch();

    return (
        <Grid container>
            <Grid item md={8}>
                <div>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedVideo.id.videoId}`} />
                    <h1>{selectedVideo.snippet.title}</h1>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </Grid>
            <Grid item md={4}>
            <RelatedVideos  />
            </Grid>
        </Grid>
    );
};

export default VideoDetailsView;