import React from 'react';
import { render } from '@testing-library/react';
import CardImage from './CardImage';

const build = (Component = <CardImage />) => {
  const { container } = render(Component);
  return { container };
};

describe('CardImage', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('height: 140px');
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('display: block');
    expect(firstChild).toHaveStyle('background-size: cover');
    expect(firstChild).toHaveStyle('background-repeat: no-repeat');
    expect(firstChild).toHaveStyle('background-position: center');
    expect(firstChild).toHaveStyle('object-fit: cover');
  });

  it('shows image', () => {
    const EXPECTED_SRC = '/image.png';
    const { firstChild } = build(<CardImage src={EXPECTED_SRC} />).container;
    expect(firstChild).toHaveAttribute('src', EXPECTED_SRC);
  });
});
