import React from 'react';
import renderer from 'react-test-renderer';
import MenuToggle from './MenuToggle.component';
import 'jest-styled-components';

describe('MenuToggle component', () => {
  it(`renders properly`, () => {
    const element = renderer.create(<MenuToggle />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
