import React from 'react';
import { Link } from 'react-router-dom';
import Styled from './ModalFavoriteStyled';

function ModalFavorite({ isLogin }) {
  return (
    <Styled.ModalFavorite>
      <Link to="/">
        <Styled.MenuContent>
          <Styled.SpanMenu>Home</Styled.SpanMenu>
        </Styled.MenuContent>
      </Link>
      {isLogin ? (
        <Link to="/favoriteVideo">
          <Styled.MenuContent>
            <Styled.SpanMenu>Favorite</Styled.SpanMenu>
          </Styled.MenuContent>
        </Link>
      ) : null}
    </Styled.ModalFavorite>
  );
}

export default ModalFavorite;
