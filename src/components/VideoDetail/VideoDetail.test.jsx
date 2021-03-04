import React from 'react';
import { render } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';

describe('<VideoDetail />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<VideoDetail />);
    expect(getByTestId('VideoDetail')).not.toBe(null);
  });
});
