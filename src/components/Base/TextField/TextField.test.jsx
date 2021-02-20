import React from 'react';
import '../../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import TextField from './TextField';

let container;
const build = () => {
  render(<TextField />, container);
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

describe('TextField', () => {
  it('renders', () => {
    const wrapper = build(<TextField />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('TextField styles', () => {
  it('applies default styling', () => {
    const tree = mount(<TextField />);
    expect(tree).toHaveStyleRule('background', '#26a69a');
    expect(tree).toHaveStyleRule('color', 'white');
    expect(tree).toHaveStyleRule('border-radius', '4px');
    expect(tree).toHaveStyleRule('padding', '8px');
    expect(tree).toHaveStyleRule('border', '0');
  });
});
