import React from 'react';
import styled from 'styled-components';
import { useVideo } from '../../state';
import VideoCard from '../VideoCard';

const Container = styled.div`
  display: block;
`;

const Title = styled.h2`
  font-size: 3.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`;

const List = styled.div``;

function VideosListComponent({ title }) {
  const { state } = useVideo();
  const { list } = state;

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {list
          .filter(({ id: { kind } }) => kind === 'youtube#video')
          .map(({ snippet: { title, description, thumbnails: { medium: { url } } } }) => (
            <VideoCard image={url} title={title} desc={description} />
          ))}
      </List>
    </Container>
  );
}

export default VideosListComponent;
