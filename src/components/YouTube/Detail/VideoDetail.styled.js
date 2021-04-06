import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-color: white;
  padding: 20px;
  align-self: center;
  ${({ theme }) => (theme.primary ? `border-color: ${theme.primary}` : '')};
  ${({ theme }) => (theme.primary ? `background: darkgray` : '')};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* height: 90vh; */
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0;
`;

const ColGrow = styled(Col)`
  flex: 1;
`;

const VideoPlayer = styled.iframe``;

const VideoInfo = styled(Col)``;

const Title = styled.h2`
  font-size: 15px;
  margin: 0;
  margin-left: 5px;
`;

const Description = styled.p`
  font-size: 13px;
  margin: 0;
  margin-left: 5px;
`;

const RelatedVideosContainer = styled(Col)`
  padding: 5px;
`;

const VideoItem = styled(Row)`
  border-top: 1px solid lightgray;
  height: 75px;
  padding: 5px;
  &:hover {
    background: lightgray;
    ${({ theme }) => (theme.secondary ? `background-color: ${theme.secondary}` : '')};
    ${({ theme }) => (theme.color ? `color: ${theme.color}` : '')};
  }
`;

const VideoPreview = styled.img``;

const VideoTitleDescWrap = styled(ColGrow)`
  overflow: hidden;
`;

const VideoTitle = styled.h2`
  font-size: 13px;
  margin: 5px 0;
  padding-left: 5px;
`;

const VideoDescription = styled.p`
  font-size: 11px;
  margin: 0;
  padding-left: 5px;
`;

const FavoritesButtonWrapper = styled.div`
  margin-left: 5px;
`;

export {
  Container,
  Row,
  Col,
  ColGrow,
  VideoPlayer,
  VideoInfo,
  Title,
  Description,
  RelatedVideosContainer,
  VideoItem,
  VideoTitleDescWrap,
  VideoPreview,
  VideoTitle,
  VideoDescription,
  FavoritesButtonWrapper,
};
