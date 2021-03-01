import React from 'react';
import 'jest-styled-components';
import { getByRole, render } from '@testing-library/react';
import LayoutWrapper from './LayoutWrapper';

const build = (Component = <LayoutWrapper />) => {
  const { container } = render(Component);
  return {
    container,
    Header: () => getByRole(container, "toolbar"),
    HomeView: () => getByRole(container, 'main'),
  };
};

describe('LayoutWrapper', () => {
  it('renders', () => {
    const { container } = build(<LayoutWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('displays Header and HomeView', () => {
    const { Header, HomeView } = build();

    expect(Header()).toBeInTheDocument();
    expect(HomeView()).toBeInTheDocument();
  });
});

describe('LayoutWrapper styles', () => {
  it('applies default styling', () => {
    const { firstChild } = build(<LayoutWrapper />).container;
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('height: 100%');
  });
});
