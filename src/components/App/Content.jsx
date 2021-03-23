import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomeVideos from '../HomeVideos/HomeVideos';
import VideoPlayerContainer from '../VideoPlayer/VideoPlayerContainer';

const Content = () => {
    return (<div>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/home">
                <HomeVideos />
            </Route>
            <Route path="/player">
                <VideoPlayerContainer />
            </Route>
        </Switch>
    </div>);
}

export default Content;