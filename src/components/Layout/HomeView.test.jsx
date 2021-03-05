import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import HomeView from './HomeView';

const build = (Component = <HomeView />) => {
  const { container } = render(Component);
  return { container };
};

describe('HomeView', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });
});

describe('HomeView styles', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('padding-top: 64px');
    expect(firstChild).toHaveStyle('height: calc(100% - 64px)');
  });

  it('renders children content', () => {
    const children = 'Children content';
    const { firstChild } = build(<HomeView>{children}</HomeView>).container;
    expect(firstChild).toHaveTextContent(children);
  });
});
