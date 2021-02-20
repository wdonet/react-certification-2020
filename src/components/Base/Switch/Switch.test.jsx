import React from 'react';
import '../../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
// import { mount, shallow } from 'enzyme';
import Switch from './Switch';

let container;
const build = () => {
  render(<Switch />, container);
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

describe('Switch', () => {
  it('renders', () => {
    const wrapper = build(<Switch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// describe('Switch styles and props', () => {
//   it('applies default styling', () => {
//     const tree = mount(<Switch />);
//   });
// });
