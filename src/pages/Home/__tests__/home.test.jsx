import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import HomePage from '../index';
import AuthProvider from '../../../providers/Auth';
import YoutubeDataProvider from '../../../providers/YoutubeData';
import GlobalProvider from '../../../providers/Global';

import { lightTheme } from '../../../theme';

describe('HomePage', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <GlobalProvider>
            <AuthProvider>
              <YoutubeDataProvider>
                <ThemeProvider theme={lightTheme}>
                  <HomePage />
                </ThemeProvider>
              </YoutubeDataProvider>
            </AuthProvider>
          </GlobalProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
