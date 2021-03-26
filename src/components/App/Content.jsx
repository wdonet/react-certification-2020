import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePlayer from '../HomeVideos/HomePlayer';
import HomeVideos from '../HomeVideos/HomeVideos';

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
                <HomePlayer />
            </Route>
        </Switch>
    </div>);
}

export default Content;