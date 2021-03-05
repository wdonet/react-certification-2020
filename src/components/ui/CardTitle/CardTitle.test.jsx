import React from 'react';
import { render } from '@testing-library/react';
import CardTitle from './CardTitle';

const build = (Component = <CardTitle />) => {
  const { container } = render(Component);
  return { container };
};

describe('CardTitle', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('font-weight: normal');
    expect(firstChild).toHaveStyle('font-size: 1.25rem');
  });

  it('displays title', () => {
    const EXPECTED_TITLE = '';
    const { firstChild } = build(<CardTitle>{EXPECTED_TITLE}</CardTitle>).container;
    expect(firstChild).toHaveTextContent(EXPECTED_TITLE);
  });
});
