import React from 'react';
import { fireEvent, getByRole, act, render } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/themes';
import { contextWrapper, googleMockedAPIObject, youtubeMockedData, YTMockedObject } from '../../utils';
import App from './index';
import AppContext from '../../providers/AppContext';

global.gapi = googleMockedAPIObject();
global.YT = YTMockedObject;

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
});