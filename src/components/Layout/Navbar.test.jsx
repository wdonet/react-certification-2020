import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { getByTestId } from '@testing-library/react';
import Navbar from './Navbar';
import { mount } from 'enzyme';

let container;
const build = () => {
  render(<Navbar />, container);
  return {
    HamburguerIcon: () => getByTestId(container, 'hamburguer-icon'),
    SearchInput: () => getByTestId(container, 'search-input'),
    ThemeModeSwitch: () => getByTestId(container, 'theme-mode-switch'),
    UserAvatar: () => getByTestId(container, 'user-avatar'),
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

describe("Navbar", () => {
  it('renders', () => {
    const wrapper = build(<Navbar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays its default content', () => {
    const { 
        HamburguerIcon, 
        SearchInput, 
        ThemeModeSwitch, 
        UserAvatar,
    } = build();
    expect(HamburguerIcon()).toBeInTheDocument(); 
    expect(SearchInput()).toBeInTheDocument(); 
    expect(ThemeModeSwitch()).toBeInTheDocument(); 
    expect(UserAvatar()).toBeInTheDocument();
  });
});


describe("Navbar styles", () => {
  it("applies default styling", ()=>{
    const tree = mount(<Navbar />);
    expect(tree).toHaveStyleRule("width", "100%");
    expect(tree).toHaveStyleRule("height", "64px");
    expect(tree).toHaveStyleRule("background-color", "#849492");
    expect(tree).toHaveStyleRule("overflow", "hidden");
    expect(tree).toHaveStyleRule("position", "fixed");
    expect(tree).toHaveStyleRule("top", "0");
  })
} );