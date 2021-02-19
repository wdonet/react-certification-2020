import React from 'react';
import '../../utils/testing';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { getByTestId } from '@testing-library/react';
import App from './index';

let container;
const build = () => {
  render(<App />, container);
  return {
    LayoutWrapper: () => getByTestId(container, 'layout-wrapper'),
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

describe('App layout', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays layout wrapper', () => {
    const { LayoutWrapper } = build();

    expect(LayoutWrapper()).toBeInTheDocument();
  });
});
