import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar.component';
import 'jest-styled-components';

describe('SearchBar component', () => {
  it(`renders properly`, () => {
    const element = renderer.create(<SearchBar />).toJSON();

    expect(element).toMatchSnapshot();
  });
});
