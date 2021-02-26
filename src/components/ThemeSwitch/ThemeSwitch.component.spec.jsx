import React from 'react';
import renderer from 'react-test-renderer';
import ThemeSwitch from './ThemeSwitch.component';
import 'jest-styled-components';

describe('ThemeSwitch component', () => {
  it(`renders properly`, () => {
    const element = renderer.create(<ThemeSwitch />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
