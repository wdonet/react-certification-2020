import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch, Route, MemoryRouter } from 'react-router-dom';

import Video from '..';
import { CustomContext } from '../../../providers/Custom';

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
  {
    kind: 'youtube#searchResult',
    etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
    id: {
      kind: 'youtube#video',
      videoId: 'Po3VwR_NNGk',
    },
    snippet: {
      publishedAt: '2019-03-05T03:52:55Z',
      channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
      title: 'Wizeline hace sentir a empleados como en casa',
      description:
        'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'El Economista TV',
      liveBroadcastContent: 'none',
      publishTime: '2019-03-05T03:52:55Z',
    },
  },
];

describe('<Video />', () => {
  const Routes = () => {
    const [item] = mockItems;
    const path = `/v/${item.id.videoId}`;

    const NotFoundPage = () => <div>Not found</div>;

    return (
      <MemoryRouter initialEntries={[path]}>
        <Switch>
          <Route exact path="/v/:videoId">
            <Video />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </MemoryRouter>
    );
  };

  it('redirects to not found page', () => {
    render(
      <CustomContext.Provider value={{ searchResult: { items: [] } }}>
        <Routes />
      </CustomContext.Provider>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('renders expected video page', () => {
    render(
      <CustomContext.Provider value={{ searchResult: { items: mockItems } }}>
        <Routes />
      </CustomContext.Provider>
    );

    expect(screen.queryByText(/not found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/video tour/i)).toBeInTheDocument();
  });
});
