import React from 'react';

import { Container, Title } from './Favorites.styles';

const FavoritesPage = () => {
  return (
    <Container>
      <Title data-testid="favorites-message">Favorites</Title>
    </Container>
  );
};

export default FavoritesPage;
