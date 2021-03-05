import React from 'react';
import { fireEvent, getByRole } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/themes';
import App from './index';
import { renderWithTheme } from '../../utils/testing';

global.gapi = {
  load: jest.fn(),
  client: { request: jest.fn() },
};

const build = (Component = <App />, theme = lightTheme) => {
  const { container } = renderWithTheme(Component, theme);
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
  };
};

describe('App theme', () => {
  it('applies "light" theme if none selected', () => {
    const { LayoutWrapper } = build();
    expect(LayoutWrapper()).toHaveStyle(`background: ${lightTheme.color.background}`);
  });

  it('changes "light" theme to "dark" theme', () => {
    const { LayoutWrapper, ThemeSwitch } = build();

    expect(LayoutWrapper()).toHaveStyle(`background: ${lightTheme.color.background}`);

    fireEvent.click(ThemeSwitch());

    expect(LayoutWrapper()).toHaveStyle(`background: ${darkTheme.color.background}`);
  });
});
