import React from 'react';
import { render, screen } from '@testing-library/react';

import useAPI from '../../hooks/useAPI';
import useQueryParams from '../../hooks/useQueryParams';
import Results from './Results.page';
import { useGlobalState } from '../../providers/GlobalState/Provider';

jest.mock('../../hooks/useAPI');
jest.mock('../../hooks/useQueryParams');

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

describe('Results', () => {
  beforeEach(() => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
    }));
  });

  it('should renders without videos', () => {
    useAPI.mockImplementation(() => [[], false]);
    useQueryParams.mockImplementation(() => ({ searchedText: 'Happy dogs' }));

    const { container } = render(<Results />);

    expect(screen.getByTestId('results-message')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should renders with videos', () => {
    useAPI.mockImplementation(() => [mockedVideos, false]);
    useQueryParams.mockImplementation(() => ({ searchedText: 'Happy dogs' }));
    render(<Results />);

    expect(screen.getByTestId('results-message')).toBeTruthy();

    expect(screen.getByTestId('video-list')).toBeTruthy();
    expect(screen.getAllByTestId('video-item').length).toBe(2);
  });
});
