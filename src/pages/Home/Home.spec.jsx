import React from 'react';
import { render } from '@testing-library/react';
import StyledVideoList from '../../components/VideoList';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

test('Displays the Header', () => {
  const { getByRole } = render(<Header />);
  expect(getByRole('banner').tagName).toBe('HEADER');
  expect(getByRole('banner').getElementsByTagName('button').length).toBe(2);
});

test('Loads and displays a video list', () => {
  const { getByText } = render(<StyledVideoList />);

  expect(getByText('Youtube Video List').tagName).toBe('H1');
  expect(document.querySelectorAll('#video-list > div').length).toBeGreaterThan(0);
});

test('Displays a single Video Card', () => {
  const video = {
    etag: 'etag',
    snippet: {
      title: 'title',
      description: 'description',
      thumbnails: {
        high: {
          url: 'thumbnails.high.url',
        },
      },
    },
  };
  const { getByText, getByTitle } = render(<VideoCard video={video} />);

  expect(document.querySelector(`#video-${video.etag}`)).toBeTruthy();
  expect(getByTitle('image').tagName).toBe('DIV');
  expect(getByTitle('image')).toHaveStyle(
    `background-image: url(${video.snippet.thumbnails.high.url})`
  );
  expect(getByText('title').tagName).toBe('H2');
  expect(getByText('description').tagName).toBe('P');
});
