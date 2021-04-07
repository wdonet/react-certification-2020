import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import VideoPage from '../index';
import { StyledLink } from '../../../components/HeaderButton/styled';
import AuthProvider from '../../../providers/Auth';
import YoutubeDataProvider from '../../../providers/YoutubeData';
import GlobalProvider from '../../../providers/Global';

import { lightTheme } from '../../../theme';

describe('VideoPage', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <GlobalProvider>
            <AuthProvider>
              <YoutubeDataProvider>
                <ThemeProvider theme={lightTheme}>
                  <VideoPage />
                </ThemeProvider>
              </YoutubeDataProvider>
            </AuthProvider>
          </GlobalProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adds videos to `favorites` correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <AuthProvider authenticatedJest>
            <YoutubeDataProvider>
              <ThemeProvider theme={lightTheme}>
                <VideoPage />
              </ThemeProvider>
            </YoutubeDataProvider>
          </AuthProvider>
        </GlobalProvider>
      </BrowserRouter>
    );

    const Button = container.getElementsByClassName(StyledLink.styledComponentId)[0];

    fireEvent.click(Button);

    expect(Button).toBeTruthy();
  });
});
