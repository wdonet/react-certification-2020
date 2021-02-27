import React from 'react';
import { NotFoundContainer, NotFoundText } from './NotFound.styled';

function NotFoundPage() {
  return (
    <section className="not-found">
      <NotFoundContainer data-testid="NotFound" maxWidth="sm">
        <NotFoundText variant="h1">404 Nothing Found</NotFoundText>
      </NotFoundContainer>
    </section>
  );
}

export default NotFoundPage;
