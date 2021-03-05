import React from 'react';
import { render } from '@testing-library/react';
import CardDescription from './CardDescription';

const build = (Component = <CardDescription />) => {
  const { container } = render(Component);
  return { container };
};

describe('CardDescription', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('font-weight: lighter');
    expect(firstChild).toHaveStyle('color: gray');
  });

  it('shows image', () => {
    const EXPECTED_CONTENT = 'Hello, this is intended to be the card description';
    const { firstChild } = build(
      <CardDescription>{EXPECTED_CONTENT}</CardDescription>
    ).container;
    expect(firstChild).toHaveTextContent(EXPECTED_CONTENT);
  });
});
