import React from 'react';
import { fireEvent, getByRole, act } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/themes';
import { renderWithTheme, googleMockedAPIObject } from '../../utils';
import App from './index';

global.gapi = googleMockedAPIObject();

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
