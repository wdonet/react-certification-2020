import React from 'react';
import 'jest-styled-components';
import Card from './Card';
import { render } from '@testing-library/react';

const build = (Component = <Card />) => {
  const { container } = render(Component);
  return { container };
}

describe('Card', () => {
  it('renders', () => {
    const container = build();
    expect(container).toMatchSnapshot();
  });
});

describe('Card styles and props', () => {
  it('applies default styling', () => {
    const { firstChild } = build().container;
    expect(firstChild).toHaveStyle('overflow: hidden');
    expect(firstChild).toHaveStyle('height: 345px');
    expect(firstChild).toHaveStyle('width: 345px');
    expect(firstChild).toHaveStyle('margin: 8px');
    expect(firstChild).toHaveStyle('box-shadow: 2px 2px 2px 2px #ccc');
    expect(firstChild).toHaveStyle('border-radius: 5px');
  });

  it('has all passed props', () => {
    const EXPECTED_IMAGE = 'https://i.picsum.photos/id/237/536/354.jpg';
    const EXPECTED_TITLE = 'title';
    const EXPECTED_DESCRIPTION = 'description';
    const { container } = build(
      <Card
        image={EXPECTED_IMAGE}
        title={EXPECTED_TITLE}
        description={EXPECTED_DESCRIPTION}
      />
    );
    const img = container.querySelector("img");
    expect(img).toHaveProperty("src", EXPECTED_IMAGE);
    expect(container.textContent).toContain(EXPECTED_TITLE);
    expect(container.textContent).toContain(EXPECTED_DESCRIPTION);
  });
});
