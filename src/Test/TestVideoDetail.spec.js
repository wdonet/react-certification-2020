import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../components/App/App.component';
import VideoDetailViewPage from '../pages/VideoDetailView/VideoDetailView.page';

describe('VideoDetailViewPage Components', () => {
  const VideoArray = [
    {
      id: {
        videoId: '123',
      },
      getVideoId: 'cHm3wVzcHjnE',
      snippet: {
        title: 'rick roll',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
          },
        },
      },
    },
  ];

  it('Take VideoDetailViewPage Snapshot ', () => {
    const { container } = render(
      <BrowserRouter>
        <AppContext.Provider value={false}>
          <VideoDetailViewPage detailVideo={VideoArray} />
        </AppContext.Provider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('Expect IFrame', () => {
    render(
      <BrowserRouter>
        <AppContext.Provider value={false}>
          <VideoDetailViewPage detailVideo={VideoArray} />
        </AppContext.Provider>
      </BrowserRouter>
    );
    const iframe = document.querySelector('iframe');
    expect(iframe).toBeTruthy();
  });

  it('Expect Card Button', () => {
    render(
      <BrowserRouter>
        <AppContext.Provider value={false}>
          <VideoDetailViewPage detailVideo={VideoArray} />
        </AppContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('Expect Card Img', () => {
    render(
      <BrowserRouter>
        <AppContext.Provider value={false}>
          <VideoDetailViewPage detailVideo={VideoArray} />
        </AppContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('Expect Card Title', () => {
    render(
      <BrowserRouter>
        <AppContext.Provider value={false}>
          <VideoDetailViewPage detailVideo={VideoArray} />
        </AppContext.Provider>
      </BrowserRouter>
    );
    const h3 = document.querySelector('h3');
    expect(h3).toBeTruthy();
  });
});
