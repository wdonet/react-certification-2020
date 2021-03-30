import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppContext from '../../providers/AppContext';
import HomePlayer from '../Home/HomePlayer';
import HomeVideos from '../Home/HomeVideos';
import FavoritesPlayer from '../Private/FavoritesPlayer';
import FavoriteVideos from '../Private/FavoriteVideos';
import Page404 from '../StatusPages/Page404';

const Content = () => {
    const { userSession } = useContext(AppContext);
    return (<div>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/home">
                <HomeVideos />
            </Route>
            <Route path="/player">
                <HomePlayer />
            </Route>
            {
                userSession ?
                <>
                    <Route path="/favorites">
                        <FavoriteVideos />
                    </Route>
                    <Route path="/favoritesPlayer">
                        <FavoritesPlayer/>
                    </Route>
                </>:null
            }
            <Route path="*" id="ok">
                <Page404 />
            </Route>
        </Switch>
    </div>);
}

export default Content;