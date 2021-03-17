import React from 'react';

import VideoList from '../../components/VideoList';
import useAPI from '../../hooks/useAPI';
import useQueryParams from '../../hooks/useQueryParams';
import { useGlobalState } from '../../providers/GlobalState/Provider';
import { Container, Title, Loader } from './Results.styles';

const ResultsPage = () => {
  const queryParam = useQueryParams().searchedText;
  const [videos, loading] = useAPI(queryParam);
  const { state } = useGlobalState();
  const { isThemeLight } = state;

  return !loading ? (
    <Container>
      <Title isThemeLight={isThemeLight} data-testid="results-message">
        Results for {`"${queryParam}"`}:{' '}
      </Title>
      <VideoList videos={videos} />
    </Container>
  ) : (
    <Loader />
  );
};

export default ResultsPage;
