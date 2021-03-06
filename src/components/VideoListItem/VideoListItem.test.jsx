import React from 'react';
import { render } from '@testing-library/react';
import VideoListItem from './VideoListItem.component';
import SearchProvider from '../../providers/Search.provider';

describe('<VideoListItem />', () => {
  test('Renders correctly', () => {
    const mockedData = { thumbnails: { high: { url: '' } }, title: '', description: '' };
    const { getByTestId } = render(
      <SearchProvider>
        <VideoListItem
          title={mockedData.title}
          description={mockedData.description}
          thumbnails={mockedData.thumbnails}
        />
      </SearchProvider>
    );
    const container = getByTestId('VideoListItem');
    expect(container).not.toBe(null);
  });
});
