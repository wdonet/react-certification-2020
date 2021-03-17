import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';

const mockedVideos = [
  {
    id: { kind: 'youtube#video', videoId: 'nmXMgqjQzls' },
    snippet: {
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/medium.jpg',
          width: 120,
          height: 90,
        },
      },
    },
  },
  {
    id: { kind: 'youtube#video', videoId: 'nmXMgqjQlhj' },
    snippet: {
      title: 'Title',
      description: 'Description',
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/medium.jpg',
          width: 120,
          height: 90,
        },
      },
    },
  },
];

describe('VideoList', () => {
  it('should renders', () => {
    const { container } = render(<VideoList videos={mockedVideos} />);

    expect(screen.getByTestId('video-list')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should renders two video items', () => {
    render(<VideoList videos={mockedVideos} />);

    expect(screen.getAllByTestId('video-item').length).toBe(2);
  });
});
