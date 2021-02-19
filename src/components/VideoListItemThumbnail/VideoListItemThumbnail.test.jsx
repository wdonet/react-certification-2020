import React from 'react';
import { render } from '@testing-library/react';
import VideoListItemThumbnail from './VideoListItemThumbnail.component';

describe('<VideoListItemThumbnail />', () => {
  test('Renders correctly', () => {
    const mockedData = { images: { high: { url: '' } }, title: '' };
    const { getByTestId } = render(
      <VideoListItemThumbnail images={mockedData.images} title={mockedData.title} />
    );
    const container = getByTestId('VideoListItemThumbnail');
    expect(container).not.toBe(null);
  });
});
