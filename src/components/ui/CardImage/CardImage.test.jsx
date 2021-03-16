import React from 'react';
import { getByRole, render } from '@testing-library/react';
import CardImage from './CardImage';

const build = (Component = <CardImage />) => {
  const { container } = render(Component);
  return { container };
};

describe('CardImage', () => {
  it('applies default styling', () => {
    const { container } = build();
    const img = getByRole(container, 'img');
    expect(img).toHaveStyle('height: 140px');
    expect(img).toHaveStyle('width: 100%');
    expect(img).toHaveStyle('display: block');
    expect(img).toHaveStyle('background-size: cover');
    expect(img).toHaveStyle('background-repeat: no-repeat');
    expect(img).toHaveStyle('background-position: center');
    expect(img).toHaveStyle('object-fit: cover');
  });

  it('shows image', () => {
    const EXPECTED_ALT = 'alternative text';
    const EXPECTED_SRC = '/image.png';
    const EXPECTED_FIGCAPTION =
      'This is the accesibility text intended to be read by the screen reader';
    const { container } = build(
      <CardImage src={EXPECTED_SRC} alt={EXPECTED_ALT} figcaption={EXPECTED_FIGCAPTION} />
    );

    const img = getByRole(container, 'img');
    const figcaption = container.querySelector('figcaption');

    expect(img).toHaveAttribute('src', EXPECTED_SRC);
    expect(img).toHaveAttribute('alt', EXPECTED_ALT);
    expect(figcaption).toHaveTextContent(EXPECTED_FIGCAPTION);
  });
});
