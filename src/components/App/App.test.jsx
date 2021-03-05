import React from 'react';
import { getByRole, render } from '@testing-library/react';
import App from './index';

global.gapi = {
  load: jest.fn(),
  client: { request: jest.fn() },
};

const build = () => {
  const { container } = render(<App />);
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
  };
};

describe('App layout', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });

  it('displays layout wrapper', () => {
    const { LayoutWrapper } = build();
    expect(LayoutWrapper()).toBeInTheDocument();
  });
});
