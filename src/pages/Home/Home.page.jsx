import React, { useRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import Content from '../../components/Content';

import { useCustom } from '../../providers/Custom';

const Title = styled(Typography).attrs(() => ({
  variant: 'h2',
}))`
  text-align: center;
  padding-top: 30px;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const {
    searchResult: { items },
  } = useCustom();

  return (
    <section className="homepage" ref={sectionRef}>
      <Title>Welcome to the Challenge!</Title>
      <Content data={items} />
    </section>
  );
}

export default HomePage;
