import React from 'react';
import '../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import HomeVideos from './HomeVideos';
import { getAllByTestId } from '@testing-library/react';
import { data } from "./mockData"

let container;
const build = () => {
  render(<HomeVideos />, container);
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

describe('HomeVideos', () => {
  it('renders', () => {
    const wrapper = build(<HomeVideos />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('HomeVideos styles and props', () => {
  it('applies default styling', () => {
    const tree = mount(<HomeVideos />);
    expect(tree).toHaveStyleRule('height', '100%');
    expect(tree).toHaveStyleRule('width', '100%');
  });
});

describe('HomeVideos shows home videos', () => {
  it('displays all videos', () => {
    build();
    const videos = getAllByTestId(container, (id) => id.includes("video-card-"));
    expect(videos).toHaveLength(data.items.length);
  })
})
