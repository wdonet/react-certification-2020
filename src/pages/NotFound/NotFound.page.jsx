import React from 'react';
import { NotFoundContainer, NotFoundText } from './NotFound.styled';

function NotFoundPage() {
  return (
    <section className="not-found">
      <NotFoundContainer maxWidth="sm">
        <NotFoundText variant="h1" color="white">
          Nothing Found
        </NotFoundText>
      </NotFoundContainer>
    </section>
  );
}

export default NotFoundPage;
