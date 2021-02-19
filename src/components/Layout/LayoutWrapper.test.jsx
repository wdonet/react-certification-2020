import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { getByTestId } from '@testing-library/react';
import { mount } from 'enzyme';
import LayoutWrapper from './LayoutWrapper';

let container;
const build = () => {
  render(<LayoutWrapper />, container);
  return {
    Header: () => getByTestId(container, 'navbar'),
    HomeView: () => getByTestId(container, 'main-content'),
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

describe('LayoutWrapper', () => {
  it('renders', () => {
    const wrapper = build(<LayoutWrapper />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays Header and HomeView', () => {
    const { Header, HomeView } = build();

    expect(Header()).toBeInTheDocument();
    expect(HomeView()).toBeInTheDocument();
  });
});

describe('LayoutWrapper styles', () => {
  it('applies default styling', () => {
    const tree = mount(<LayoutWrapper />);
    expect(tree).toHaveStyleRule('width', '100%');
    expect(tree).toHaveStyleRule('height', '100%');
  });
});
