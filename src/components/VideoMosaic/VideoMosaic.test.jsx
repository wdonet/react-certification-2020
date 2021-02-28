import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoMosaic, { shortenTitle, shortenDescription } from './VideoMosaic.component';
import Theme from '../App/App.styled';
import mockData from '../../utils/youtube-videos-mock-v2.json';

const mockVideo = mockData.items[2];
describe('Video Mosaic Component Tests', () => {
  beforeEach(() => {
    render(
      <Theme>
        <VideoMosaic key={mockVideo.id.videoId} snippet={mockVideo.snippet} />
      </Theme>
    );
  });

  it('Should render the video mosaic', () => {
    expect(screen.getByText(shortenTitle(mockVideo.snippet.title))).toBeInTheDocument();
    expect(
      screen.getByText(shortenDescription(mockVideo.snippet.description))
    ).toBeInTheDocument();
    expect(screen.getByTitle(mockVideo.snippet.title)).toBeInTheDocument();
  });
});
