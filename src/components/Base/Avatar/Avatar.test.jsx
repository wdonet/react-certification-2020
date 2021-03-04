import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

const build = (Component = <Avatar />) => {
  const { container } = render(Component);
  return { container };
};

describe('Avatar', () => {
  it('renders', () => {
    const { container } = build(<Avatar src="avatar" />);
    expect(container).toMatchSnapshot();
  });
});

describe('Avatar styles and props', () => {
  it('applies default styling', () => {
    const EXPECTED_SRC = 'testing';
    const { firstChild } = build(<Avatar src={EXPECTED_SRC} />).container;
    expect(firstChild).toHaveStyle('height: 40px');
    expect(firstChild).toHaveStyle('width: 40px');
    expect(firstChild).toHaveStyle('margin: 8px');
    expect(firstChild).toHaveStyle('border-radius: 50%');
  });

  it('has all passed props', () => {
    const EXPECTED_SRC = 'https://i.picsum.photos/id/237/536/354.jpg';
    const EXPECTED_ALT = 'profile_image';
    const { firstChild } = build(
      <Avatar src={EXPECTED_SRC} alt={EXPECTED_ALT} />
    ).container;
    expect(firstChild).toHaveAttribute('src', EXPECTED_SRC);
    expect(firstChild).toHaveAttribute('alt', EXPECTED_ALT);
  });
});
