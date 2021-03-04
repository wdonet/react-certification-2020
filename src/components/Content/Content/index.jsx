import React from 'react';
import Styled from './styled';
import './content.css';

import Sidebar from '../Sidebar';
import Categories from '../Categories';
import Videos from '../Videos';

const Content = () => {
  return (
    <Styled.Content>
      <Styled.SideBar>
        <Sidebar />
      </Styled.SideBar>
      <Styled.Main>
        <Categories />
        <Videos />
      </Styled.Main>
    </Styled.Content>
  );
};

export default Content;
