import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../../providers/AppContext';
import PlayerContext from '../../providers/PlayerContext'
import VideoPlayerContainer from '../GenericComponents/VideoPlayerContainer';

const HomePlayer = () => {
    const { push } = useHistory();
    const { userSession, videosList } = useContext(AppContext);
    return (<PlayerContext.Provider value={{ hideFavoriteButtons:  !userSession || false }}>
                <VideoPlayerContainer 
                    videosList={videosList} 
                    onCaptionClick={(video) =>{
                        push({
                            pathname: `/player`,
                            search: `?id=${video.id.videoId}`,
                            state: video
                        })
                    }}
                />
            </PlayerContext.Provider>);
}

export default HomePlayer;