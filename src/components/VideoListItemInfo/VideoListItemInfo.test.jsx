import React from 'react';
import { render } from '@testing-library/react';
import VideoListItemInfo from './VideoListItemInfo.component';

describe('<VideoListItemInfo />', () => {
  test('Renders correctly', () => {
    const mockedData = { title: '', description: '' };
    const { getByTestId } = render(
      <VideoListItemInfo title={mockedData.title} description={mockedData.description} />
    );
    const container = getByTestId('VideoListItemInfo');
    expect(container).not.toBe(null);
  });
});
