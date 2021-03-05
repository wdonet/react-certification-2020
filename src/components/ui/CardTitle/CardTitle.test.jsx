import React from 'react';
import { getByTitle, render } from '@testing-library/react';
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

  it('displays title and contains "title" attribute', () => {
    const EXPECTED_TITLE_ATTRIBUTE_VALUE = 'Title';
    const EXPECTED_TITLE = '';
    const { container } = build(
      <CardTitle title={EXPECTED_TITLE_ATTRIBUTE_VALUE}>{EXPECTED_TITLE}</CardTitle>
    );
    expect(getByTitle(container, EXPECTED_TITLE_ATTRIBUTE_VALUE)).toHaveTextContent(
      EXPECTED_TITLE
    );
  });
});
