import React from 'react';
import { render, screen } from '@testing-library/react';

import ContentCard from '..';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
  useHistory: jest.fn().mockReturnValue({ push: (f) => f }),
}));

const mockItem = {
  kind: 'youtube#searchResult',
  etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
  id: {
    kind: 'youtube#channel',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  },
  snippet: {
    publishedAt: '2014-09-27T01:39:18Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Wizeline',
    description:
      "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
    thumbnails: {
      default: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
      },
      medium: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
      },
      high: {
        url:
          'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'upcoming',
    publishTime: '2014-09-27T01:39:18Z',
  },
};

describe('<ContentCard />', () => {
  it('contains H2 tag for title', () => {
    render(<ContentCard item={mockItem} />);

    expect(screen.getByText(mockItem.snippet.title).tagName).toBe('H2');
  });

  it('maps expected description', () => {
    render(<ContentCard item={mockItem} />);

    expect(screen.getByText(mockItem.snippet.description).tagName).toBe('P');
    expect(screen.getByText(mockItem.snippet.description).textContent).toMatch(
      /technology/i
    );
  });
});
