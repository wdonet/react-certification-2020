import styled from 'styled-components';

const Image = styled.div`
  display: block;
  width: 100%;
  height: 150px;
  border-radius: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardWrapper = styled.div`
  min-height: 360px !important;
`;

export { Image, CardWrapper };
