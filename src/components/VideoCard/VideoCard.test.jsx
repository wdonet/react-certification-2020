import React from 'react';
import ReactDOM from 'react-dom';
import VideoCard from '.';
import { Details, ImageContainer, VideoCardContainer } from './VideoCard.styled';

const container = document.createElement('div');
const image = 'http://placecorgi.com/250';
const title = 'Corgies';
const description = 'I Love Corgies!';
ReactDOM.render(
  <VideoCard image={image} title={title} description={description} />,
  container
);
const videoCardContainer = container.getElementsByClassName(
  VideoCardContainer.styledComponentId
)[0];
const details = videoCardContainer.getElementsByClassName(Details.styledComponentId)[0];
const thumbnail = videoCardContainer.getElementsByClassName(
  ImageContainer.styledComponentId
)[0];

test("VideoCard contains all of it's parts", () => {
  expect(container.children).toContain(videoCardContainer);
  expect(videoCardContainer.children).toContain(details);
  expect(videoCardContainer.children).toContain(thumbnail);
});

test('VideoCard renders title', () => {
  expect(videoCardContainer).toHaveTextContent(title);
});

test('VideoCard renders description', () => {
  expect(videoCardContainer).toHaveTextContent(description);
});
