import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoDetails from './VideoDetails.component';
import { useGlobalState } from '../../providers/GlobalState/Provider';

const mockedVideo = {
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
};

const mockedVideos = [
  mockedVideo,
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

jest.mock('../../providers/GlobalState/Provider');

describe('VideoDetails', () => {
  beforeEach(() => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
    }));
  });

  it('should renders', () => {
    const { container } = render(
      <VideoDetails
        videoId={mockedVideo.id.videoId}
        description={mockedVideo.snippet.description}
        title={mockedVideo.snippet.title}
        videos={mockedVideos}
      />
    );

    expect(screen.getByText(mockedVideo.snippet.title)).toBeTruthy();
    expect(screen.getByText(mockedVideo.snippet.description)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should not render the detailed video as a related video item', () => {
    render(
      <VideoDetails
        videoId={mockedVideo.id.videoId}
        description={mockedVideo.snippet.description}
        title={mockedVideo.snippet.title}
        videos={mockedVideos}
      />
    );

    expect(screen.getAllByTestId('related-video-item').length).toBe(1);
    expect(screen.getByText(mockedVideos[1].snippet.title)).toBeTruthy();
  });
});
