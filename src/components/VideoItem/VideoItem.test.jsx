import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import VideoItem from './VideoItem.component';
import { useGlobalState } from '../../providers/GlobalState/Provider';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockedVideo = {
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
};

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

describe('VideoItem', () => {
  beforeEach(() => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
    }));
  });

  it('should renders', () => {
    const { container } = render(<VideoItem video={mockedVideo} videos={mockedVideos} />);

    expect(screen.getByText(mockedVideo.snippet.title)).toBeTruthy();
    expect(screen.getByText(mockedVideo.snippet.description)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should redirect to watch page when user click it', () => {
    const expected = {
      pathname: 'watch',
      search: '?id=nmXMgqjQzls',
      state: {
        title: mockedVideo.snippet.title,
        description: mockedVideo.snippet.description,
        videos: mockedVideos,
      },
    };
    render(<VideoItem video={mockedVideo} videos={mockedVideos} />);

    fireEvent.click(screen.getByTestId('video-item'));

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenLastCalledWith(expected);
  });
});
