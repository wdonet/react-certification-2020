import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import VideoCardV2 from '../index';

import { lightTheme } from '../../../theme';

describe('VideoCardV2', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <VideoCardV2
            image="urlimage.com"
            title="title of the video"
            channelTitle="wizeline"
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
