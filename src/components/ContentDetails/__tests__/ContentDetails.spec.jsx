import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';

import ContentDetails from '..';
import AuthProvider from '../../../providers/Auth';
import CustomProvider from '../../../providers/Custom';

const mockItems = [
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
  {
    kind: 'youtube#searchResult',
    etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
    id: {
      kind: 'youtube#video',
      videoId: 'HYyRZiwBWc8',
    },
    snippet: {
      publishedAt: '2019-04-18T18:48:04Z',
      channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
      description:
        'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Wizeline',
      liveBroadcastContent: 'none',
      publishTime: '2019-04-18T18:48:04Z',
    },
  },
];

describe('<ContentDetails />', () => {
  it('executes back button', () => {
    const historyMock = {
      push: jest.fn(),
      listen: jest.fn(),
      location: { pathname: '/' },
    };

    render(
      <AuthProvider>
        <CustomProvider>
          <Router history={historyMock}>
            <ContentDetails item={mockItems[0]} relatedItems={mockItems} />
          </Router>
        </CustomProvider>
      </AuthProvider>
    );

    const element = screen.getByLabelText('back button');

    fireEvent.click(element);
    expect(historyMock.push).toHaveBeenCalled();
  });
});
