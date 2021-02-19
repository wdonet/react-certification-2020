import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import MainContent from './MainContent';
import { mount } from 'enzyme';

let container;
const build = () => {
  render(<MainContent />, container);
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

describe("MainContent", () => {
  it('renders', () => {
    const wrapper = build(<MainContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


describe("MainContent styles", () => {
  it("applies default styling", ()=>{
    const tree = mount(<MainContent />);
    expect(tree).toHaveStyleRule("margin-top", "64px");
  })
} );