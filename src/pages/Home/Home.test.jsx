import React from 'react';
import { render, screen } from '@testing-library/react';

import useAPI from '../../hooks/useAPI';
import Home from './Home.page';
import { useGlobalState } from '../../providers/GlobalState/Provider';

jest.mock('../../hooks/useAPI');

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

jest.mock('../../providers/GlobalState/Provider');

describe('Home', () => {
  beforeEach(() => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
    }));
  });

  it('should renders without videos', () => {
    useAPI.mockImplementation(() => [[], false]);
    const { container } = render(<Home />);

    expect(screen.getByTestId('home-message')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should renders with videos', () => {
    useAPI.mockImplementation(() => [mockedVideos, false]);
    render(<Home />);

    expect(screen.getByTestId('home-message')).toBeTruthy();

    expect(screen.getAllByTestId('video-item').length).toBe(2);
  });
});
