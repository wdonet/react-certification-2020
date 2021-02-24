import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import App from './index';

const build = () => {
  const { container } = render(<App />);
  return {
    container,
    LayoutWrapper: () => getByTestId(container, 'layout-wrapper'),
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
