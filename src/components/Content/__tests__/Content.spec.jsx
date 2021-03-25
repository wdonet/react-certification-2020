import React from 'react';
import { render } from '@testing-library/react';

import Content from '..';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
  useHistory: jest.fn().mockReturnValue({ push: (f) => f }),
}));

const mockItems = [
  {
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
  },
  {
    kind: 'youtube#searchResult',
    etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
    id: {
      kind: 'youtube#video',
      videoId: 'nmXMgqjQzls',
    },
    snippet: {
      publishedAt: '2019-09-30T23:54:32Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-09-30T23:54:32Z',
    },
  },
];

describe('<Content />', () => {
  it('maps expected items', () => {
    const renderRes = render(<Content data={mockItems} />);
    const items = renderRes.container.querySelectorAll('.MuiPaper-root.MuiCard-root');

    expect(items.length).toBe(mockItems.length);
  });
});
