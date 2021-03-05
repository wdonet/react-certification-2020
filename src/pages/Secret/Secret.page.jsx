import React from 'react';
import { IoArrowUndo } from 'react-icons/io5';
import { Title } from '../Login/Login.styles';
import { VideoPlayer, VideoPlayerContainer } from '../Video/Video.styles';
import { ButtonLink, Container } from './Secret.styles';

function SecretPage() {
  return (
    <Container>
      <Title>Welcome, voyager...</Title>
      <VideoPlayerContainer>
        <VideoPlayer
          allowFullScreen
          frameBorder="0"
          title="rick roll"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </VideoPlayerContainer>
      <ButtonLink to="/">
        <IoArrowUndo />
        Back to Home
      </ButtonLink>
    </Container>
  );
}

export default SecretPage;
