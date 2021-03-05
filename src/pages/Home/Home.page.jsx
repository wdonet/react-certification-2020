import React, { useEffect, useState } from 'react';
import { IoEnterOutline, IoFlame } from 'react-icons/io5';
import VideoCard from '../../components/VideoCard';
import { useAuth } from '../../providers/Auth';
import {
  ButtonLinkWarning,
  ButtonLinkInfo,
  ButtonsContainer,
  Card,
  CardList,
  Container,
  Header,
} from './Home.styles';
import { formatDate } from '../../utils/fns';
import { YoutubeApi } from '../../api/youtube';
import { useSearch } from '../../providers/Search/Search.provider';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState({ items: [] });
  const { searchQuery } = useSearch();
  const { authenticated } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      YoutubeApi.search(searchQuery).then((result) => {
        setSearchResults(result);
      });
    };
    fetchData();
  }, [searchQuery]);

  return (
    <Container>
      <Header>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <ButtonsContainer>
              <ButtonLinkInfo to="/secret" data-testid="secret-button">
                <IoFlame />
                Show me something cool
              </ButtonLinkInfo>
            </ButtonsContainer>
          </>
        ) : (
          <ButtonsContainer>
            <ButtonLinkWarning to="/login" data-testid="login-button">
              <IoEnterOutline />
              Let me in
            </ButtonLinkWarning>
          </ButtonsContainer>
        )}
      </Header>
      <hr />
      <CardList data-testid="search-list">
        {searchResults?.items?.map(
          ({
            etag,
            id,
            snippet: {
              title,
              channelTitle,
              publishTime,
              thumbnails,
              liveBroadcastContent,
            },
          }) => {
            return (
              <Card key={etag}>
                <VideoCard
                  id={id.videoId || id}
                  title={title}
                  channel={channelTitle}
                  date={formatDate(publishTime)}
                  thumbnail={thumbnails.medium.url}
                  liveBroadcastContent={liveBroadcastContent}
                />
              </Card>
            );
          }
        )}
      </CardList>
    </Container>
  );
};

export default HomePage;
