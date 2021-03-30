import React from 'react';
import { fireEvent, getByRole, act, render } from '@testing-library/react';
import { contextWrapper, googleMockedAPIObject, youtubeMockedData, YTMockedObject } from '../../utils';
import { getAllByTestId, getByTestId } from '@testing-library/dom';
import { darkTheme, lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import App from './index';

const loginPortal = document.createElement('div');
loginPortal.id = "login-portal";
document.body.appendChild(loginPortal);
global.gapi = googleMockedAPIObject();
global.YT = YTMockedObject;

const for400Miliseconds = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 400)
})

const build = async (Component = <App />) => {
  let container;
  const contextValue = { videos: youtubeMockedData.items, theme: lightTheme };
  await act(async () => {
    const wrapped = contextWrapper(AppContext, contextValue, Component);
    container = render(wrapped).container;
  });
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
    videosList: () => getAllByTestId(container, (testID) => testID.includes('video-card-') ),
    noVideosAvailableCaption: () => getByTestId(container, 'no-videos-available' ),
    unableToLoadVideos: () => getByTestId(container, 'unable-to-load-videos' ),
    loginForm: () => getByTestId(container, 'login-form' ),
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

  it('shows  "No hay videos :/" legend after failed fetch', async () => {
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

// describe("user login and session", () => {
//   it("shows nothing but login when no session is loaded", async () => {
//     window.sessionStorage.removeItem(USER_SESSION_KEY);
//     const built = await build();
//     const { loginForm } = built;
//     expect(loginForm()).toBeDefined();
//   });
// })