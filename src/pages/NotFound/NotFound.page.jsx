import React from 'react';
import { IoArrowUndo } from 'react-icons/io5';
import { Container, HomeLink } from './NotFound.styles';

function NotFoundPage() {
  return (
    <Container>
      <img src="404.gif" alt="page not found" />
      <div>
        <HomeLink to="/">
          <IoArrowUndo />
          Back to Home
        </HomeLink>
      </div>
    </Container>
  );
}

export default NotFoundPage;
