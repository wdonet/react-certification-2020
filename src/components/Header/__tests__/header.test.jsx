import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Header from '../index';
import AuthProvider from '../../../providers/Auth';
import YoutubeDataProvider from '../../../providers/YoutubeData';

import { lightTheme } from '../../../theme';

describe('Header', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AuthProvider>
            <YoutubeDataProvider>
              <ThemeProvider theme={lightTheme}>
                <Header />
              </ThemeProvider>
            </YoutubeDataProvider>
          </AuthProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
