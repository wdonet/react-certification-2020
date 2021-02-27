import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoMosaic, { shortenTitle } from './VideoMosaic.component';
import Theme from '../App/App.styled';
import mockData from '../../utils/youtube-videos-mock';
import { getVideosOnly } from '../../pages/Home';

const mockVideo = getVideosOnly(mockData)[1];
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
    expect(screen.getByText(mockVideo.snippet.description)).toBeInTheDocument();
    expect(screen.getByTitle(mockVideo.snippet.title)).toBeInTheDocument();
  });
});
