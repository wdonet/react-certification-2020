import React from 'react';
import 'jest-styled-components';
import IconWrapper from './IconWrapper';
import hamburger from '../../../assets/icons/hamburguer.png';
import { render } from '@testing-library/react';

const build = (Component = <IconWrapper />) => {
  const { container } = render(Component);
  return { container };
}

describe('IconWrapper', () => {
  it('renders', () => {
    const { container } = build(<IconWrapper src={hamburger} alt="ok" />);
    expect(container).toMatchSnapshot();
  });
});

describe('IconWrapper styles and props', () => {
  it('applies default styling', () => {
    const EXPECTED_SRC = 'testing';
    const { firstChild } = build(<IconWrapper src={EXPECTED_SRC} />).container;
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('width: 16px');
    expect(firstChild).toHaveStyle('height: 16px');
    expect(firstChild).toHaveStyle('margin: 8px');
    expect(firstChild).toHaveStyle('padding: 8px');
  });

  it('has the specified props', () => {
    const EXPECTED_SRC = 'https://i.picsum.photos/id/237/536/354.jpg';
    const EXPECTED_ALT = 'lorem_picsum';
    const { firstChild } = build(
      <IconWrapper src={EXPECTED_SRC} alt={EXPECTED_ALT} />
    ).container;
    expect(firstChild).toHaveAttribute("src", EXPECTED_SRC);
    expect(firstChild).toHaveAttribute("alt", EXPECTED_ALT);
  });
});
