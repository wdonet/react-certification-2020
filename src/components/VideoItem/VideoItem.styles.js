import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 18rem;
  display: inline-table;
  margin: 1rem;
  height: 28rem;
  -webkit-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.43);
  border-radius: 10px;
`;

export const VideoImage = styled.img`
  height: 10rem;
  border-radius: 10px 10px 0 0;
`;

export const InfoContainer = styled.div`
  & > p {
    padding 1rem;
  }
`;
