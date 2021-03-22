import { render } from '@testing-library/react';
import React from 'react';
import CardContent from './CardContent';

const build = (Component = <CardContent />) => {
  const { container } = render(Component);
  return { container };
};

describe('CardContent', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('text-align: justify');
    expect(firstChild).toHaveStyle('padding: 4px');
    expect(firstChild).toHaveStyle('margin: 4px');
  });

  it('renders content', () => {
    const EXPECTED_CONTENT = 'Hello, there!';
    const { firstChild } = build(<CardContent>{EXPECTED_CONTENT}</CardContent>).container;
    expect(firstChild).toHaveTextContent(EXPECTED_CONTENT);
  });
});
