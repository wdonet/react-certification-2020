/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout.component';
import { YouTubeProvider } from '../YouTube/YouTubeProvider';

describe('Layout', () => {
  it('should render Layout component correctly', () => {
    const wrapper = shallow(
      <YouTubeProvider>
        <Layout />
      </YouTubeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
