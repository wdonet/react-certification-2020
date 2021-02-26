import React from 'react';
import { render } from '@testing-library/react';
import VideoCard from './VideoCard.component';

const data = {
  snippet: {
    title: 'Mock component',
    description: 'Mock description',
    thumbnails: {
      high: {
        url: 'https://mockimage.com',
      },
    },
  },
};

describe('VideoCard component', () => {
  it('contains an image tag', () => {
    const { getByAltText } = render(<VideoCard data={data} />);

    expect(getByAltText('Mock component')).toBeTruthy();
  });

  it('contains an h2 tag', () => {
    const { getByText } = render(<VideoCard data={data} />);

    expect(getByText('Mock component').tagName).toBe('H2');
  });

  it('contains a p tag', () => {
    const { getByText } = render(<VideoCard data={data} />);

    expect(getByText('Mock description').tagName).toBe('P');
  });
});
