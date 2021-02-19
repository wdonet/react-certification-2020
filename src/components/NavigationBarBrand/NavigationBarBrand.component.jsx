import React from 'react';
import Styled from './NavigationBarBrand.styled';

function NavigationBarBrand() {
  return (
    <Styled.Container className="navbar-brand" href="/" data-testid="NavigationBarBrand">
      <Styled.Image
        src="./logo120.png"
        alt=""
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Styled.Container>
  );
}

export default NavigationBarBrand;
