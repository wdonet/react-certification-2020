import React from 'react';
import { render, act } from '@testing-library/react';
import AppContext from '../../providers/AppContext';
import { contextWrapper, routerWrapper, youtubeMockedData, YTMockedObject } from '../../utils';
import HomePlayer from './HomePlayer';
import { lightTheme } from '../../providers/themes';
import { fireEvent, getAllByTestId } from '@testing-library/dom';

global.YT = YTMockedObject;

const build = async (Component = <HomePlayer/>) => {
    let container;
    let routeWrap;
    let history
    const contextValue = { search: jest.fn, videosList: youtubeMockedData.items,  theme: lightTheme };
    await act(async () => {
        const wrappedContex = contextWrapper(AppContext, contextValue, Component);
        routeWrap = await routerWrapper(wrappedContex);
        container = render(routeWrap.wrap).container;
        history = routeWrap.history;
    });
    return { 
        container,
        history: () => routeWrap.history,
        searchParams: () => new URLSearchParams(routeWrap.history.location.search),
        addFavoriteButton: () => getByTestId(container, "add-favorite"),
        videoCaptionsList: () => getAllByTestId(container, (id) => id.includes('small-caption-')),
      };
}

describe('HomePlayer',() => {
    it('plays video from the begining redirecting to /player passing videoId', async () => {
        const built = (await build());
        const { videoCaptionsList, searchParams, history } = built;
        const videoId = youtubeMockedData.items[0].id.videoId;
        
        fireEvent.click(videoCaptionsList()[0].firstChild);
        
        expect(history().location.pathname).toBe("/player");
        expect(searchParams().has("id")).toBe(true);
        expect(searchParams().get("id")).toBe(videoId);
      });
});