import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { render, screen } from '@testing-library/react';

import useQueryParams from '../../hooks/useQueryParams';
import Watch from './Watch.page';
import { useGlobalState } from '../../providers/GlobalState/Provider';

const mockedVideos = [
  {
    id: { kind: 'youtube#video', videoId: 'nmXMgqjQzls' },
    snippet: {
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
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
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
          width: 120,
          height: 90,
        },
      },
    },
  },
];

jest.mock('../../hooks/useQueryParams');
jest.mock('react-router');

jest.mock('../../providers/GlobalState/Provider');

describe('Watch', () => {
  beforeEach(() => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
    }));
  });
  it('should renders', () => {
    useQueryParams.mockImplementation(() => ({ videoId: 'VideoId' }));
    useLocation.mockImplementation(() => ({
      state: { title: 'Title', description: 'Description', videos: mockedVideos },
    }));
    useHistory.mockImplementation(() => ({
      push: jest.fn(),
    }));
    const { container } = render(<Watch />);

    expect(container).toMatchSnapshot();
  });

  it('should renders without state', () => {
    useQueryParams.mockImplementation(() => ({ videoId: 'VideoId' }));
    useLocation.mockImplementation(() => ({ state: {} }));
    useHistory.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Watch />);

    expect(screen.getByText('Add To Favorites')).toBeTruthy();
  });
});
