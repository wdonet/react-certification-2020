import React from 'react';
import { useGlobal } from '../../providers/Global';

import { StyledSection, Title } from './styled';

const FavoritesPage = () => {
  const { favorites } = useGlobal();

  console.log({ favorites });
  return (
    <StyledSection>
      <Title>Favorites</Title>
    </StyledSection>
  );
};

export default FavoritesPage;
