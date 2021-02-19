import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import VideoCard from './VideoCard.component';
import searchResult from '../../mock/youtube-videos-mock.json';

describe('VideoCard component', () => {
  it('Should display mock data in component', () => {
    const video = searchResult.items[1];
    render(
      <VideoCard
        title={video.snippet.title}
        channel={video.snippet.channelTitle}
        date={video.snippet.publishTime}
        thumbnail={video.snippet.thumbnails.default.url}
        liveBroadcastContent={video.snippet.liveBroadcastContent}
      />
    );

    expect(screen.getByText(video.snippet.title).tagName).toBe('H4');
    expect(screen.getByText(video.snippet.channelTitle).tagName).toBe('H5');
    expect(screen.getByText(video.snippet.publishTime).tagName).toBe('P');
  });

  it('Should render conditional item for liveBroadcastContent', () => {
    const video = searchResult.items[0];

    render(
      <VideoCard
        title={video.snippet.title}
        channel={video.snippet.channelTitle}
        date={video.snippet.publishTime}
        thumbnail={video.snippet.thumbnails.default.url}
        liveBroadcastContent={video.snippet.liveBroadcastContent}
      />
    );

    expect(screen.getByText('upcoming')).toBeInTheDocument();
  });

  it('Validates VideoCard snapshot', () => {
    const video = searchResult.items[0];
    const component = renderer.create(
      <VideoCard
        title={video.snippet.title}
        channel={video.snippet.channelTitle}
        date={video.snippet.publishTime}
        thumbnail={video.snippet.thumbnails.default.url}
        liveBroadcastContent={video.snippet.liveBroadcastContent}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
