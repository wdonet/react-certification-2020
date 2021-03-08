import React from 'react';
import { fireEvent, getByRole, act } from '@testing-library/react';
import { getAllByTestId, getByTestId } from '@testing-library/dom';
import { darkTheme, lightTheme } from '../../providers/themes';
import { renderWithTheme, googleMockedAPIObject, YTMockedObject } from '../../utils';
import App from './index';

global.gapi = googleMockedAPIObject();
global.YT = YTMockedObject;

const build = async (Component = <App />, theme = lightTheme) => {
  let container;
  await act(async () => {
    container = renderWithTheme(Component, theme).container;
  });
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
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
    fireEvent.click(wrapper.ThemeSwitch());
    expect(wrapper.LayoutWrapper()).toHaveStyle(
      `background: ${darkTheme.color.background}`
    );
  });
});

describe('App playback', () => {
  it('changes view mode to video playback', async () => {
    const wrapper = await build();
    const { firstChild: videoCard } = getAllByTestId(wrapper.container, (id) =>
      id.includes('video-card-')
    )[0];

    await act(async () => {
      fireEvent.click(videoCard);
    });

    const container = getByTestId(wrapper.container, 'video-player-container');
    expect(container).toBeVisible();
  });

  it('changes video on clicked video on list', async () => {
    const wrapper = await build();
    const { firstChild: videoCard } = getAllByTestId(wrapper.container, (id) =>
      id.includes('video-card-')
    )[0];

    await act(async () => {
      fireEvent.click(videoCard);
    });

    const container = getByTestId(wrapper.container, 'video-player-container');
    const realatedVideosList = getAllByTestId(container, (id) =>
      id.includes('small-caption-')
    );

    fireEvent.click(realatedVideosList[0].firstChild);
    // CHECK VIDEO CHANGE
  });
});
