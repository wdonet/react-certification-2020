import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import VideoCard from '../index';

import { lightTheme } from '../../../theme';

describe('VideoCard', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <VideoCard
            title="Title of the video"
            channelTitle="Wizeline"
            publishedAt={1232143242}
            image="thisistheurl.com"
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
