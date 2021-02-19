import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IoEnterOutline, IoExitOutline, IoFlame } from 'react-icons/io5';
import VideoCard from '../../components/VideoCard';
import { useAuth } from '../../providers/Auth';
import searchResult from '../../mock/youtube-videos-mock.json';
import {
  ButtonLinkWarning,
  ButtonLinkInfo,
  ButtonsContainer,
  Card,
  CardList,
  Container,
  Header,
} from './Home.styles';

const HomePage = () => {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Container ref={sectionRef}>
      <Header>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <ButtonsContainer>
              <ButtonLinkWarning to="/" onClick={deAuthenticate}>
                <IoExitOutline />
                Logout
              </ButtonLinkWarning>
              <ButtonLinkInfo to="/secret">
                <IoFlame />
                Show me something cool
              </ButtonLinkInfo>
            </ButtonsContainer>
          </>
        ) : (
          <ButtonsContainer>
            <ButtonLinkWarning to="/login">
              <IoEnterOutline />
              Let me in
            </ButtonLinkWarning>
          </ButtonsContainer>
        )}
      </Header>
      <hr />
      <CardList>
        {searchResult.items.map((item) => {
          return (
            <Card key={item.etag}>
              <VideoCard
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                date={formatDate(item.snippet.publishTime)}
                thumbnail={item.snippet.thumbnails.medium.url}
                liveBroadcastContent={item.snippet.liveBroadcastContent}
              />
            </Card>
          );
        })}
      </CardList>
    </Container>
  );
};

export default HomePage;
