import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { getByTestId } from '@testing-library/react';
import LayoutWrapper from './LayoutWrapper';
import { mount } from 'enzyme';

let container;
const build = () => {
  render(<LayoutWrapper />, container);
  return {
    Navbar: () => getByTestId(container, 'navbar'),
    MainContent: () => getByTestId(container, 'main-content'),
  };
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

describe("LayoutWrapper", () => {
  it('renders', () => {
    const wrapper = build(<LayoutWrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays Navbar and MainContent', () => {
    const { Navbar, MainContent } = build();

    expect(Navbar()).toBeInTheDocument();
    expect(MainContent()).toBeInTheDocument();
  });
});


describe("LayoutWrapper styles", () => {
  it("applies default styling", ()=>{
    const tree = mount(<LayoutWrapper />);
    expect(tree).toHaveStyleRule('width', '100%');
    expect(tree).toHaveStyleRule('height', '100%');
  })
} );