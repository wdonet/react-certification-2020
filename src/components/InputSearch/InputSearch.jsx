import React from 'react';
import styled from 'styled-components';

const InputSearchStyled = styled.div`
  margin-left: 50px;
`;

export default function InputSearch() {
  return (
    <InputSearchStyled>
      <input type="text" placeholder="Search" />
    </InputSearchStyled>
  );
}
