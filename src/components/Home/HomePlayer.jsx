import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../../providers/AppContext';
import VideoPlayerContainer from '../GenericComponents/VideoPlayerContainer';

const HomePlayer = () => {
    const { push } = useHistory();
    const { videosList } = useContext(AppContext);
    return (<VideoPlayerContainer 
                videosList={videosList} 
                onCaptionClick={(video) =>{
                    push({
                        pathname: `/player`,
                        search: `?id=${video.id.videoId}`,
                        state: video
                    })
                }}/>);
}

export default HomePlayer;