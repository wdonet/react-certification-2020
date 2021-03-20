/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { YouTubeProvider } from '../../YouTube/YouTubeProvider';

describe('Header', () => {
  it('should render Header component correctly', () => {
    const wrapper = shallow(
      <YouTubeProvider>
        <Header />
      </YouTubeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
