import React from 'react';
import { render } from '@testing-library/react';
import VideoList from './VideoList.component';
import SearchProvider from '../../providers/Search.provider';

describe('<VideoList />', () => {
  test('Renders correctly', () => {
    const mockedItems = [
      {
        id: { videoId: '' },
        snippet: { title: '', thumbnails: { high: { url: '' } } },
        etag: '',
      },
    ];
    const { getByTestId } = render(
      <SearchProvider>
        <VideoList items={mockedItems} />
      </SearchProvider>
    );
    expect(getByTestId('VideoList')).not.toBe(null);
  });
});
