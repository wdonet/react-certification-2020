import React from 'react';
import '../../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import Avatar from './Avatar';

let container;
const build = () => {
  render(<Avatar />, container);
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

describe('Avatar', () => {
  it('renders', () => {
    const wrapper = build(<Avatar src="avatar" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Avatar styles and props', () => {
  it('applies default styling', () => {
    const EXPECTED_SRC = 'testing';
    const tree = mount(<Avatar src={EXPECTED_SRC} />);
    expect(tree).toHaveStyleRule('height', '40px');
    expect(tree).toHaveStyleRule('width', '40px');
    expect(tree).toHaveStyleRule('margin', '8px');
    expect(tree).toHaveStyleRule('border-radius', '50%');
  });

  it('has all passed props', () => {
    const EXPECTED_SRC = 'avatar_url';
    const shallowed = shallow(<Avatar src={EXPECTED_SRC} />);
    expect(shallowed.props().src).toBe(EXPECTED_SRC);
  });
});
