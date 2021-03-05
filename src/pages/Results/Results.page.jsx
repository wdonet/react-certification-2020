import React from 'react';

import VideoList from '../../components/VideoList';
import useAPI from '../../hooks/useAPI';
import useQueryParams from '../../hooks/useQueryParams';
import { Container, Title } from './Results.styles';

const ResultsPage = () => {
  const queryParam = useQueryParams().searchedText;
  const [videos, loading] = useAPI(queryParam);

  return (
    <Container>
      <Title data-testid="results-message">Results for {`"${queryParam}"`}: </Title>
      {!loading && <VideoList videos={videos} />}
    </Container>
  );
};

export default ResultsPage;
