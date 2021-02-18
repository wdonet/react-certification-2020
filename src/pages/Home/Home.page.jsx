import React from 'react';
import CardListComponent from '../../components/CardList/CardList.component';
import mockedData from '../../youtube-videos-mock.json';
import Styled from './styled';

function Home() {
  const { items } = mockedData;

  return (
    <>
      <Styled.Title>
        <Styled.H1>Video playlist</Styled.H1>
      </Styled.Title>
      <CardListComponent items={items} />
    </>
  );
}

export default Home;
