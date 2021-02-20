import React from 'react';
import VideoCard from '../VideoCard';
import mockedData from '../../youtube-videos-mock.json';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function VideosCatalog() {
    const { items } = mockedData;

    let videos = items.map(video => {
        const videoId = ('channelId' in video.id ? video.id.channelId : video.id.videoId);
        return <VideoCard key={videoId}  videoInfo={video}/>;
    });
    
    return (
        <Container maxWidth={false}>
            <Grid container justify="center" spacing={3}>
                {videos}
            </Grid>
        </Container>
        
    );
}