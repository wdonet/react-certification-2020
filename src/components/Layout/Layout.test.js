/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout.component';

describe('Layout', () => {
  it('should render Layout component correctly', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper).toMatchSnapshot();
  });
});
