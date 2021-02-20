import React from 'react';
import '../../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import IconWrapper from './IconWrapper';
import hamburger from '../../../assets/icons/hamburguer.png';

let container;
const build = () => {
  render(<IconWrapper />, container);
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  return container;
});

describe('IconWrapper', () => {
  it('renders', () => {
    const wrapper = build(<IconWrapper src={hamburger} alt="ok" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('IconWrapper styles and props', () => {
  it('applies default styling', () => {
    const EXPECTED_SRC = 'testing';
    const tree = mount(<IconWrapper src={EXPECTED_SRC} />);
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('width', '16px');
    expect(tree).toHaveStyleRule('height', '16px');
    expect(tree).toHaveStyleRule('margin', '8px');
    expect(tree).toHaveStyleRule('padding', '8px');
  });

  it('has the specified props', () => {
    const EXPECTED_SRC = 'src';
    const EXPECTED_ALT = 'alt';
    const shallowed = shallow(<IconWrapper src={EXPECTED_SRC} alt={EXPECTED_ALT} />);
    const { src, alt } = shallowed.props();
    expect(src).toBe(EXPECTED_SRC);
    expect(alt).toBe(EXPECTED_ALT);
  });
});
