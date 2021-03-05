import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import VideoPage from './Video.page';
import detailVideo from '../../mock/youtube-detail-mock.json';
import SearchProvider from '../../providers/Search';

jest.mock('axios');

describe('Video Page', () => {
  const response = { data: detailVideo };

  beforeEach(() => {
    axios.get.mockResolvedValue(response);
  });

  afterEach(() => {
    jest.clearAllMocks();
    axios.mockRestore();
  });

  it('Render Video Page', async () => {
    const video = response.data.items[0];

    await act(async () => {
      render(
        <BrowserRouter>
          <SearchProvider>
            <VideoPage />
          </SearchProvider>
        </BrowserRouter>
      );
    });

    expect(screen.queryByTestId('video-player')).toBeInTheDocument();
    expect(screen.queryByTestId('video-info')).toBeInTheDocument();
    expect(screen.queryByTestId('related-videos')).toBeInTheDocument();
    expect(screen.getAllByText(video.snippet.title)[0].tagName).toBe('H2');
  });

  it('Trigger search by clicking tags', async () => {
    const video = response.data.items[0];
    window.history.pushState({}, 'Test', `/video/${video.id}`);

    await act(async () => {
      render(
        <BrowserRouter>
          <SearchProvider>
            <VideoPage />
          </SearchProvider>
        </BrowserRouter>
      );
    });

    const tag = screen.queryAllByTestId('tag-button')[0];
    expect(window.location.pathname).toBe(`/video/${video.id}`);
    fireEvent.click(tag);
    expect(window.location.pathname).toBe('/');
  });
});
