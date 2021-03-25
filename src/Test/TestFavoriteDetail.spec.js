import React from 'react';
import FavoriteDetail from '../pages/FavoriteVideos/FavoriteVideoDetail.page';

describe('FavoriteDetail Components', () => {
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

  it('Take FavoriteDetail Snapshot ', () => {
    const component = <FavoriteDetail {...VideoArray} />;
    expect(component).toMatchSnapshot();
  });
});
