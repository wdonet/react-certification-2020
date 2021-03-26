import React from 'react';
import 'jest-styled-components';
import { lightTheme } from '../../providers/themes';
import { act, getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData, routerWrapper } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import { fireEvent, getByTestId } from '@testing-library/dom';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;
const EXPECTED_LENGHT = 3
const contextValueVideosList = youtubeMockedData.items.slice(0, EXPECTED_LENGHT);

const build = async (
  Component = <VideoPlayerContainer />, 
  videosList = contextValueVideosList, 
  currentVideoId = contextValueVideosList[0].id.videoId
  ) => {
  const contextValue = { search: jest.fn, videosList, currentVideoId, theme: lightTheme };
  let container;
  let routeWrap; 
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });

  return { 
    container,
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    addFavoriteButton: () => getByTestId(container, "add-favorite"),
    videoCaptionsList: () => getAllByTestId(container, (id) => id.includes('small-caption-')),
  };
};

describe('VideoPlayerContainer', () => {

  it('shows video list', async () => {
    const built = (await build());
    const { videoCaptionsList } = built;
    expect(videoCaptionsList()).toHaveLength(EXPECTED_LENGHT);
  });

  it('plays video from the begining redirecting to /player passing videoId', async () => {
    const built = (await build());
    const { videoCaptionsList, searchParams, history } = built;
    const videoId = youtubeMockedData.items[0].id.videoId;
    fireEvent.click(videoCaptionsList()[0].firstChild);
    expect(history().location.pathname).toBe("/player");
    expect(searchParams().has("id")).toBe(true);
    expect(searchParams().get("id")).toBe(videoId);
  });

  it('adds/removes to favorites and "Add favorite" / "Remove favorite" in button ', async () => {
    const FAVORITES_KEY = "favorites";
    const built = (await build());
    const { addFavoriteButton } = built;
    const savedVideo = contextValueVideosList[0];

    expect(addFavoriteButton().textContent).toBe("Add favorite");

    fireEvent.click(addFavoriteButton());

    let favorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsedSavedVideo = JSON.parse(favorites)[savedVideo.id.videoId];
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(1);
    expect(JSON.stringify(parsedSavedVideo)).toEqual(JSON.stringify(savedVideo));
    expect(addFavoriteButton().textContent).toBe("Remove favorite");

    fireEvent.click(addFavoriteButton());

    favorites = window.localStorage.getItem(FAVORITES_KEY);
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(0);
    expect(addFavoriteButton().textContent).toBe("Add favorite");
  });

  it('adds/removes video to existing in localStorage', async () => {
    const FAVORITES_KEY = "favorites";
    const firstVideo = contextValueVideosList[1];
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify({[firstVideo.id.videoId]: firstVideo}));

    const built = (await build());
    const { addFavoriteButton } = built;
    const savedVideo = contextValueVideosList[0];

    fireEvent.click(addFavoriteButton());

    let favorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsedSavedVideo = JSON.parse(favorites)[savedVideo.id.videoId];
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(2);
    expect(JSON.stringify(parsedSavedVideo)).toEqual(JSON.stringify(savedVideo));
  });

});