import React from 'react';
import { render } from '@testing-library/react';
import VideoListItem from './VideoListItem.component';

describe('<VideoListItem />', () => {
  test('Renders correctly', () => {
    const mockedData = { thumbnails: { high: { url: '' } }, title: '', description: '' };
    const { getByTestId } = render(
      <VideoListItem
        title={mockedData.title}
        description={mockedData.description}
        thumbnails={mockedData.thumbnails}
      />
    );
    const container = getByTestId('VideoListItem');
    expect(container).not.toBe(null);
  });
});
