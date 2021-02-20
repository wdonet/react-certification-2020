/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home.page';

import mockData from './youtube-videos-mock.json';
import { VideoCard } from './Home.styled';

describe('HomePage', () => {
  it('should render HomePage component correctly', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render same quantity of items as mockData', () => {
    const wrapper = shallow(<HomePage />);
    const countMockItems = mockData.items.filter(
      (item) => item.id.kind === 'youtube#video'
    ).length;
    expect(wrapper.find(VideoCard).length).toBe(countMockItems);
  });
});
