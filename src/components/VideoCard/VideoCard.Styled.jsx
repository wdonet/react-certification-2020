import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: 345px;
  height: 345px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.88);
  border-radius: 4px;
  color: #ececec;

  & img {
    width: 345px;
    height: 140px;
  }

  & h2 {
    font-size: 1rem;
    font-weight: 800;
    margin: 0 0 0.35em 0;
  }

  & p {
    font-size: 0.785rem;
    font-weight: 400;
    margin: 0;
  }
`;

export const Details = styled.div`
  padding: 16px;
`;
