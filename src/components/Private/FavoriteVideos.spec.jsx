import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render, act } from '@testing-library/react';
import { youtubeMockedData, contextWrapper, routerWrapper, YTMockedObject } from '../../utils';
import { lightTheme } from '../../providers/themes';
import { fireEvent } from '@testing-library/dom';
import AppContext from '../../providers/AppContext';
import FavoriteVideos from './FavoriteVideos';

const EXPECTED_LENGTH = 1;
global.YT = YTMockedObject;

const FAVORITES_KEY = "favorites";
const addVideosToLocalStorage = () => {
    let savedFavorites = "";
    youtubeMockedData.items.slice(0,EXPECTED_LENGTH).forEach( video => {
      savedFavorites += JSON.stringify({[video.id.videoId]: video})
    });
    window.localStorage.setItem(FAVORITES_KEY, savedFavorites);
}
addVideosToLocalStorage();
const build = async (Component = <FavoriteVideos />) => {
  let container;
  let routeWrap;
  const contextValue = { theme: lightTheme, playVideoById: jest.fn() };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return { 
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    videoCards: () => getAllByTestId(container, (testID) => testID.includes('video-card-') ),
    contextValue 
  };
};

describe('shows favorite videos', () => {
    it('displays card videos', async () => {
        const { videoCards } = await build();
        expect(videoCards()).toHaveLength(EXPECTED_LENGTH);
    });

    it('triggers redirect to video Favorites Player route', async () => {
        const built = await build();
        const { videoCards, history, searchParams } = built;
        const { videoId } = youtubeMockedData.items[0].id;
        await act(async () => {
        fireEvent.click(videoCards()[0].firstChild);
        });
        expect(history().location.pathname).toEqual(`/favoritesPlayer`);
        expect(searchParams().has("id")).toBe(true);
        expect(searchParams().get("id")).toEqual(videoId);
    });
});
