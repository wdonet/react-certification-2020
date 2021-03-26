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

const build = async ( Component = <VideoPlayerContainer videosList={contextValueVideosList}/>, video ) => {

  beforeEach(() => {
    window.localStorage.clear();
  });

  const contextValue = { search: jest.fn, theme: lightTheme };
  let container;
  let routeWrap; 
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  routeWrap.history.push({ pathname: "/player", search: `?id=${video?.id.videoId}`, state: video });
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

  it('triggers onCaptionClick function passed as prop', async () => {
    const mockedFunction = jest.fn();
    const built = (await build(<VideoPlayerContainer videosList={youtubeMockedData.items} onCaptionClick={mockedFunction}/>));
    const { videoCaptionsList } = built;
    const video = youtubeMockedData.items[0];
    fireEvent.click(videoCaptionsList()[0].firstChild);
    expect(mockedFunction).toHaveBeenCalledTimes(1);
    expect(mockedFunction).toHaveBeenCalledWith(video);
  });

  it('adds/removes to favorites and "Add favorite" / "Remove favorite" in button ', async () => {
    const FAVORITES_KEY = "favorites";
    const savedVideo = contextValueVideosList[0];
    const built = (await build(<VideoPlayerContainer videosList={contextValueVideosList}/>, savedVideo));
    const { addFavoriteButton } = built;

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
    const savedVideo = contextValueVideosList[0];
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify({[firstVideo.id.videoId]: firstVideo}));
    
    const built = (await build(<VideoPlayerContainer videosList={contextValueVideosList}/>, savedVideo));
    const { addFavoriteButton } = built;

    fireEvent.click(addFavoriteButton());

    let favorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsedSavedVideo = JSON.parse(favorites)[savedVideo.id.videoId];
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(2);
    expect(JSON.stringify(parsedSavedVideo)).toEqual(JSON.stringify(savedVideo));
  });

  it('adds/removes favorite clicking related video favorite button ', async () => {
    const FAVORITES_KEY = "favorites";
    const savedVideo = contextValueVideosList[0];
    const built = (await build(<VideoPlayerContainer videosList={contextValueVideosList}/>, savedVideo));
    const { container } = built;

    const captionAddFavorite = getAllByTestId(container, "caption-add-favorite")[0];
    fireEvent.click(captionAddFavorite);

    let favorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsedSavedVideo = JSON.parse(favorites)[savedVideo.id.videoId];
    
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(1);
    expect(JSON.stringify(parsedSavedVideo)).toEqual(JSON.stringify(savedVideo));
    expect(captionAddFavorite.textContent).toBe("Remove favorite");

    fireEvent.click(captionAddFavorite);

    favorites = window.localStorage.getItem(FAVORITES_KEY);
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(0);
    expect(captionAddFavorite.textContent).toBe("Add favorite");
  });

  it('adds/removes video to existing clicking related video favorite button', async () => {
    const FAVORITES_KEY = "favorites";
    const firstVideo = contextValueVideosList[1];
    const secondVideo = contextValueVideosList[0];
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify({[firstVideo.id.videoId]: firstVideo}));
    
    const built = (await build(<VideoPlayerContainer videosList={contextValueVideosList}/>, secondVideo));
    const { container } = built;

    const captionAddFavorite = getAllByTestId(container, "caption-add-favorite")[0];
    fireEvent.click(captionAddFavorite);

    let favorites = window.localStorage.getItem(FAVORITES_KEY);
    const parsedSecondVideo = JSON.parse(favorites)[secondVideo.id.videoId];
    expect(Object.keys(JSON.parse(favorites))).toHaveLength(2);
    expect(JSON.stringify(parsedSecondVideo)).toEqual(JSON.stringify(secondVideo));
  });

});