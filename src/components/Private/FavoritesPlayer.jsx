import React from 'react';
import { useHistory } from 'react-router';
import PlayerContext from '../../providers/PlayerContext'
import VideoPlayerContainer from '../GenericComponents/VideoPlayerContainer';

const FAVORITES_KEY = "favorites";
const getFavorites = () => {
    const parsedFavorites = JSON.parse(window.localStorage.getItem(FAVORITES_KEY));
    return parsedFavorites 
        ? Object.keys(parsedFavorites).map( (key) => parsedFavorites[key] )
        : [];
};

const FavoritesPlayer = () => {
    const { push } = useHistory();
    const videosList = getFavorites();
    return (<PlayerContext.Provider value={{ hideFavoritesButton: true }}>
                <VideoPlayerContainer 
                        videosList={videosList} 
                        onCaptionClick={(video) =>{
                            push({
                                pathname: `/favoritesPlayer`,
                                search: `?id=${video.id.videoId}`,
                                state: video
                            })
                        }}/>
            </PlayerContext.Provider>);
}

export default FavoritesPlayer;