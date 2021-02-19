import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HomeLink, Title } from './NotFound.styles';

const NotFoundPage = () => {
  return (
    <Container>
      <Title>Page Not Found</Title>
      <img data-testid="gif" src="404.gif" alt="Page Not Found" />
      <HomeLink>
        <Link data-testid="go-home" to="/" className="home-link">
          Go back home
        </Link>
      </HomeLink>
    </Container>
  );
};

export default NotFoundPage;
