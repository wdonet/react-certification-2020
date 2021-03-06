import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'
import YTSerach from 'youtube-api-search';
import RelatedVideos from '../RelatedVideos';

const API_KEY="AIzaSyDWAKbVGVJgvjZXbzZbrfFHNSrp4JElfzE";

const VideoDetailsView = ({ selectedVideo, handleVideoSelected }) => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        YTSerach({key: API_KEY, relatedToVideoId: selectedVideo.id.videoId, maxResults: 3 },function(rVideos){
            setRelatedVideos(rVideos);
            console.log(rVideos);
        } );
      }, [selectedVideo]);

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
            <RelatedVideos 
                handleVideoSelected={handleVideoSelected}
                relatedVideos={relatedVideos}
              />
            </Grid>
        </Grid>
    );
};

export default VideoDetailsView;