import React from 'react';
import VideoDetail from '../YouTube/Detail/VideoDetail';
import { useYouTube } from '../YouTube/YouTubeProvider';
import Header from './Header';
import { Content, MainContainer } from './Layout.styled';

function Layout({ children }) {
  const { state } = useYouTube();
  const { currentVideo } = state;
  return (
    <>
      <MainContainer>
        <Header>This is the header</Header>
        <Content>{children}</Content>
      </MainContainer>
      {currentVideo && <VideoDetail />}
    </>
  );
}

export default Layout;
