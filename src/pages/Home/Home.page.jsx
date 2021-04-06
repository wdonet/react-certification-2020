import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './Home.styled';

function HomePage() {
  return (
    <>
      <Title>Welcome to Mini-Challenges-5!</Title>
      <p>This page requires no authentication.</p>
      <Link to="/videos"> Go To Videos (which requires authentication)</Link>
    </>
  );
}

export default HomePage;
