import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { getByTestId } from '@testing-library/react';
import { mount } from 'enzyme';
import Header from './Header';

let container;
const build = () => {
  render(<Header />, container);
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

describe('Header', () => {
  it('renders', () => {
    const wrapper = build(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays its default content', () => {
    const { HamburguerIcon, SearchInput, ThemeModeSwitch, UserAvatar } = build();
    expect(HamburguerIcon()).toBeInTheDocument();
    expect(SearchInput()).toBeInTheDocument();
    expect(ThemeModeSwitch()).toBeInTheDocument();
    expect(UserAvatar()).toBeInTheDocument();
  });
});

describe('Header styles', () => {
  it('applies default styling', () => {
    const tree = mount(<Header />);
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('align-items', 'center');
    expect(tree).toHaveStyleRule('justify-content', 'space-between');
    expect(tree).toHaveStyleRule('width', '100%');
    expect(tree).toHaveStyleRule('height', '64px');
    expect(tree).toHaveStyleRule('background-color', '#00695c');
    expect(tree).toHaveStyleRule('overflow', 'hidden');
    expect(tree).toHaveStyleRule('position', 'fixed');
    expect(tree).toHaveStyleRule('top', '0');
  });
});
