import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Grid from '../index';
import AuthProvider from '../../../providers/Auth';
import YoutubeDataProvider from '../../../providers/YoutubeData';

import { lightTheme } from '../../../theme';

describe('Grid', () => {
  test('renders correctly', () => {
    const items = [<div key="1">Hola</div>, <div key="2">Adios</div>];
    const tree = renderer
      .create(
        <BrowserRouter>
          <AuthProvider>
            <YoutubeDataProvider>
              <ThemeProvider theme={lightTheme}>
                <Grid gridItems={items} />
              </ThemeProvider>
            </YoutubeDataProvider>
          </AuthProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
