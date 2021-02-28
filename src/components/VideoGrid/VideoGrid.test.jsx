import React from 'react';
import { render } from '@testing-library/react';
import VideoGrid from '.';
import { VideoGridContainer } from './VideoGrid.styled';

test('Render video grid', () => {
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

  const { container } = render(<VideoGrid videos={mockVideos} />);
  const videoGrid = container.getElementsByClassName(
    VideoGridContainer.styledComponentId
  )[0];
  expect(container.children).toContain(videoGrid);
});
