import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import SearchInput from '../index';
import YoutubeDataProvider from '../../../providers/YoutubeData';

import { lightTheme } from '../../../theme';

describe('SearchInput', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <YoutubeDataProvider>
          <ThemeProvider theme={lightTheme}>
            <SearchInput />
          </ThemeProvider>
        </YoutubeDataProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
