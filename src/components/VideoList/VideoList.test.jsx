import React from 'react';
import { render } from '@testing-library/react';
import VideoList from './VideoList.component';

describe('<VideoList />', () => {
  test('Renders correctly', () => {
    const mockedItems = [
      {
        snippet: { title: '', thumbnails: { high: { url: '' } } },
        etag: '',
      },
    ];
    const { getByTestId } = render(<VideoList items={mockedItems} />);
    expect(getByTestId('VideoList')).not.toBe(null);
  });
});
