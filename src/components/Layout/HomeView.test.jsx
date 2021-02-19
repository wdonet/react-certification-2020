import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import HomeView from './HomeView';

let container;
const build = () => {
  render(<HomeView />, container);
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

describe('HomeView', () => {
  it('renders', () => {
    const wrapper = build(<HomeView />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('HomeView styles', () => {
  it('applies default styling', () => {
    const tree = mount(<HomeView />);
    expect(tree).toHaveStyleRule('padding-top', '64px');
    expect(tree).toHaveStyleRule('height', 'calc(100% - 64px)');
  });
});
