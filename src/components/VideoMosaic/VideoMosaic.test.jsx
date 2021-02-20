import React from 'react';
import { render } from '@testing-library/react';
import VideoMosaic from './VideoMosaic.component';
import Theme from '../App/Theme.styled';
import mockData from '../../utils/youtube-videos-mock';

export function getVideosOnly() {
  return mockData.items.filter((item) => item.id.kind === 'youtube#video');
}

const mockVideo = getVideosOnly()[0];
describe('Video Mosaic Component Tests', () => {
  const setup = () => {
    const utils = render(
      <Theme>
        <VideoMosaic key={mockVideo.id.videoId} snippet={mockVideo.snippet} />
      </Theme>
    );
    return {
      ...utils,
    };
  };

  it('Should render the video mosaic', () => {
    const { getByText, getByTitle } = setup();
    expect(getByText(mockVideo.snippet.title)).toBeInTheDocument();
    expect(getByText(mockVideo.snippet.description)).toBeInTheDocument();
    expect(getByTitle(mockVideo.snippet.title)).toBeInTheDocument();
  });
});
