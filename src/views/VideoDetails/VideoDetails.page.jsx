import React, { useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import RelatedCard from '../../components/RelatedCard';
import { VideoInfo } from './styled';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}))

export default function VideoDetails({match}) {

    const [info, setInfo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);

    const { videoId } = match.params;
    const classes = useStyles();

    useEffect(() => {
        searchVideo();
        fetchRelatedVideos();
    }, [match]);
    
    const searchVideo = async () =>{
        const response = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet',
                    id: videoId,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            }
        )
        
        const { title, description } = response.data.items[0].snippet;
        
        setInfo({"title": title, "description": description});
    }

    const fetchRelatedVideos= async () => {
        const response = await axios.get(
            'https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 10,
                    relatedToVideoId: videoId,
                    type: 'video',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            }
        )

        setRelatedVideos(response.data.items);
    }

    return (
        <Grid container className={classes.root} spacing={2} wrap='nowrap'>
            <Grid item xs={12}>
                <VideoInfo>
                    <ReactPlayer 
                        url={`htttps://youtu.be/${videoId}`}
                        controls
                        playing={true}
                        width="980px"
                        height="525px"
                    />
                    <h4>{info.title}</h4>
                    <p>{info.description}</p> 
                </VideoInfo>
            </Grid>

            <Grid item xs={12}>
                <Grid container direction="column">
                    {relatedVideos.map((video) => {
                        if('snippet' in video) {
                            return (
                                <Grid key={video.id.videoId} item>
                                    <RelatedCard videoInfo={video} />
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}