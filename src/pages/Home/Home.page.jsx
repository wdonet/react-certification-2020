import React, { useRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import Content from '../../components/Content';

const Title = styled(Typography).attrs(() => ({
  variant: 'h2',
}))`
  text-align: center;
  padding-top: 30px;
`;

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Title>Welcome to the Challenge!</Title>
      <Content />
    </section>
  );
}

export default HomePage;
