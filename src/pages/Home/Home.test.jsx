import React from 'react';
import { render, waitFor } from '@testing-library/react';
import HomePage from '.';
import { VideoGridContainer } from '../../components/VideoGrid/VideoGrid.styled';

test('Video grid on initial render', async () => {
  const { container } = render(<HomePage />);
  await waitFor(() => {
    const videoGrid = document.getElementsByClassName(
      VideoGridContainer.styledComponentId
    )[0];
    if (!videoGrid) {
      throw new Error();
    }
  });
  const videoGrid = document.getElementsByClassName(
    VideoGridContainer.styledComponentId
  )[0];
  expect(container.children).toContain(videoGrid);
});
