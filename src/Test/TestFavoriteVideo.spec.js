import React from 'react';
import FavoriteVideo from '../pages/FavoriteVideos/FavoriteVideo.page';

describe('FavoriteVideo Components', () => {
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

  it('Take FavoriteVideo Snapshot ', () => {
    const component = <FavoriteVideo {...VideoArray} />;
    expect(component).toMatchSnapshot();
  });
});
