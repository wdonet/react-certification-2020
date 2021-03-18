import React from 'react';
import { fireEvent, getByRole, act, render } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/themes';
import { contextWrapper, googleMockedAPIObject, youtubeMockedData, YTMockedObject } from '../../utils';
import AppContext from '../../providers/AppContext';
import App from './index';
import { getAllByTestId, getByTestId } from '@testing-library/dom';

global.gapi = googleMockedAPIObject();
global.YT = YTMockedObject;

const for400Miliseconds = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 400)
})

const build = async (Component = <App />) => {
  let container;
  await act(async () => {
    const wrapped = contextWrapper(AppContext, { videos: youtubeMockedData.items, theme: lightTheme }, Component);
    container = render(wrapped).container;
  });
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
    videosList: () => getAllByTestId(container, (testID) => testID.includes('video-card-') ),
    noVideosAvailableCaption: () => getByTestId(container, 'no-videos-available' ),
    unableToLoadVideos: () => getByTestId(container, 'unable-to-load-videos' ),
  };
};

describe('App theme', () => {
  it('applies "light" theme if none selected', async () => {
    const wrapper = await build();
    expect(wrapper.LayoutWrapper()).toHaveStyle(
      `background: ${lightTheme.color.background}`
    );
  });

  it('changes "light" theme to "dark" theme', async () => {
    const wrapper = await build();

    expect(wrapper.LayoutWrapper()).toHaveStyle(
      `background: ${lightTheme.color.background}`
    );
    await act(async () => {
      fireEvent.click(wrapper.ThemeSwitch());
    });
    expect(wrapper.LayoutWrapper()).toHaveStyle(
      `background: ${darkTheme.color.background}`
    );
  });

  it('shows videos list after successful fetch', async () => {
    const built = (await build());
    const { videosList } = built;
    expect(videosList()).toHaveLength(youtubeMockedData.items.length);
  });

  it('shows  "No hay videos :/" legeng after failed fetch', async () => {
    global.gapi = googleMockedAPIObject(false);
    const built = (await build());
    const { noVideosAvailableCaption } = built;
    expect( noVideosAvailableCaption() ).toBeTruthy();    
  });

  it('waits until `gapi` object is defined before first search', async () => {
    global.gapi = undefined;
    const built = await build();
    
    await for400Miliseconds();
    global.gapi = googleMockedAPIObject();
    await act( async () => { await for400Miliseconds(); });
    
    const { videosList } = built; 
    expect(videosList()).toHaveLength(youtubeMockedData.items.length);
  });

  it('shows "Couldn\'t load videos" when "gapi" object is not loaded after 1 second', async () => {
    global.gapi = undefined;
    const built = await build();
    
    await for400Miliseconds();
    await for400Miliseconds();

    await act( async () => { 
      await for400Miliseconds();
      global.gapi = googleMockedAPIObject(); 
    });
    
    const { noVideosAvailableCaption } = built; 
    expect(noVideosAvailableCaption()).toBeTruthy();
  });

});