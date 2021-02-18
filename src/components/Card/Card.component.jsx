import React from 'react';
import Styled from './styled';

function Card(props) {
  return (
    <>
      <Styled.StyledCol lg="4" md="6">
        <Styled.StyledCard className="dflex">
          <Styled.Img src={props.imgSrc} />
          <Styled.StyledContainer>
            <Styled.Title>
              <b>{props.title}</b>
            </Styled.Title>
            <Styled.Description>{props.description}</Styled.Description>
          </Styled.StyledContainer>
        </Styled.StyledCard>
      </Styled.StyledCol>
    </>
  );
}

export default Card;
