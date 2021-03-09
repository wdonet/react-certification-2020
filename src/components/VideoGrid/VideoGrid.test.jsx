import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import YouTubeProvider from '../../providers/YouTubeAPI';
import { VideoGridContainer } from './VideoGrid.styled';
import VideoGrid from '.';

const videoId = 'corgieId';
const title = 'Corgie';
const description = 'I Love Corgies!';
const url = 'http://placecorgi.com/250';
const mockVideos = [
  {
    id: { videoId },
    snippet: {
      title,
      description,
      thumbnails: { medium: { url } },
    },
  },
];

test('Render video grid', async () => {
  const { container, getByText } = render(
    <YouTubeProvider isMock>
      <MemoryRouter>
        <VideoGrid videos={mockVideos} />
      </MemoryRouter>
    </YouTubeProvider>
  );
  await waitForElementToBeRemoved(() => getByText('Loading!')).then();

  const videoGrid = container.getElementsByClassName(
    VideoGridContainer.styledComponentId
  )[0];
  expect(container.children).toContain(videoGrid);
});
