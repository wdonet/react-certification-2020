import styled from 'styled-components';

export const Row = styled.div`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const BigCol = styled.div`
  float: left;
  width: 70%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const SmallCol = styled.div`
  float: left;
  width: 30%;
  padding: 10px;
  display: grid;
  grid-template-columns: 100%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 750px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 950px) {
    height: 500px;
  }
`;

export const TextVideoContainer = styled.div`
  padding: 2px;
  width: 100%;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Title = styled.div`
  padding: 10px;
  width: 80%;
  float: left;
  text-transform: capitalize;
  font-weight: normal;
  text-align: left;
  font-size: 22px;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const FavoritesButton = styled.button`
  border-color: #f44336;
  color: red;
  background: white;
  padding: 10px;
  font-size: 16px;
  float: left;
  width: 20%;

  @media screen and (max-width: 750px) {
    width: 30%;
  }
  @media screen and (max-width: 550px) {
    width: 60%;
  }

  &:hover {
    background: #f44336;
    color: white;
  }
`;

export const Description = styled.p`
  color: gray;
  font-size: 18px;
  text-align: justify;
`;
