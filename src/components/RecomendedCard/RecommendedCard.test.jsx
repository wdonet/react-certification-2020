import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RecommendedCard from './RecomendedCard.component';
import relatedVideos from '../../mock/youtube-related-videos-mock.json';

describe('RecommendedCard', () => {
  it('Should display mock data in component', () => {
    const video = relatedVideos.items[0];
    const { title, channelTitle, thumbnail, liveBroadcastContent } = video.snippet;
    const id = video.id.videoId;
    render(
      <BrowserRouter>
        <RecommendedCard
          id={id}
          title={title}
          channel={channelTitle}
          thumbnail={thumbnail}
          liveBroadcastContent={liveBroadcastContent}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(video.snippet.title).tagName).toBe('H5');
    expect(screen.getByText(video.snippet.channelTitle).tagName).toBe('H6');
  });
  it('Should render conditional item for liveBroadcastContent', () => {
    const video = relatedVideos.items[4];
    const { title, channelTitle, thumbnail, liveBroadcastContent } = video.snippet;
    const id = video.id.videoId;
    render(
      <BrowserRouter>
        <RecommendedCard
          id={id}
          title={title}
          channel={channelTitle}
          thumbnail={thumbnail}
          liveBroadcastContent={liveBroadcastContent}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(video.snippet.title).tagName).toBe('H5');
    expect(screen.getByText(video.snippet.channelTitle).tagName).toBe('H6');
    expect(screen.getByText('live')).toBeInTheDocument();
  });

  it('Validates VideoCard snapshot', () => {
    const video = relatedVideos.items[0];
    const { title, channelTitle, thumbnail, liveBroadcastContent } = video.snippet;
    const id = video.id.videoId;
    const component = renderer.create(
      <BrowserRouter>
        <RecommendedCard
          id={id}
          title={title}
          channel={channelTitle}
          thumbnail={thumbnail}
          liveBroadcastContent={liveBroadcastContent}
        />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
