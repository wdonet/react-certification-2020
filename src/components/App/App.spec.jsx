import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../providers/theme/themes';
import App from './index';

const build = () => {
  const { container } = render(<App />);
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
