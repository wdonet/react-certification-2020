import React, {useState, useEffect} from 'react';
import VideoCard from '../VideoCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

export default function VideosCatalog({search}) {
    
    const [videos, setVideos] = useState([]);

    useEffect( () => {
        if(!search || !search.trim()){
            fetchInitialVideos();
        } else {
            fetchSearchVideos();
        }
        
    }, [search]);

    const fetchInitialVideos = async () =>{
        const response = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 20,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            }
        )
        
        setVideos(response.data.items);
    }

    const fetchSearchVideos = async () => {
        const response = await axios.get(
            'https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: search,
                    maxResults: 20,
                    type: 'video',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            }
        )

        setVideos(response.data.items);
    }

    
    return (
        <Container maxWidth={false}>
            <Grid container justify="center" spacing={3}>
                {videos.map((video) => {
                    let videoId = (typeof video.id === 'object') ? video.id.videoId : video.id;

                    return (
                        <VideoCard key={videoId} videoInfo={video}></VideoCard>
                    )
                })}
            </Grid>
        </Container>
        
    );
}