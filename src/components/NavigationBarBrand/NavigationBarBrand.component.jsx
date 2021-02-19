import React from 'react';
import Styled from './NavigationBarBrand.styled';

function NavigationBarBrand() {
  return (
    <Styled.Container className="navbar-brand" href="/" data-testid="NavigationBarBrand">
      <Styled.Image
        src=""
        alt=""
        width="30"
        height="24"
        className="d-inline-block align-top"
      />
    </Styled.Container>
  );
}

export default NavigationBarBrand;
