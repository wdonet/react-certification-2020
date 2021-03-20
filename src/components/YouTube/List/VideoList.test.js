/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import VideoList from './VideoList';
import mockData from './youtube-videos-mock.json';
import { YouTubeProvider } from '../YouTubeProvider';

describe('VideoList', () => {
  let props;
  beforeEach(() => {
    props = {
      videos: mockData.items,
    };
  });
  it('should render VideoList component correctly', () => {
    const wrapper = shallow(
      <YouTubeProvider>
        <VideoList {...props} />
      </YouTubeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
