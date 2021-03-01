import React from 'react';
import { getByRole, render } from '@testing-library/react';
import App from './index';

const build = () => {
  const { container } = render(<App />);
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
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
