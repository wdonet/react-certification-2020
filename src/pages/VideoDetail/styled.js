import styled from 'styled-components';

const VideoDetail = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.content};
`;

const Player = styled.div`
  width: 65%;
  height: 700px;
  float: left;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const List = styled.div`
  width: 35%;
  float: right;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const VideoInfo = styled.div`
  width: 100%;
`;

const VideoDescription = styled.div`
  width: 75%;
  height: 700px;
  float: left;
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const AddFavorites = styled.div`
  width: 25%;
  float: right;
  position: relative;
  text-align: right;
  padding-top: 20px;
  color: ${({ theme }) => theme.text};
`;

export { Player, VideoDetail, List, VideoInfo, VideoDescription, AddFavorites };
