import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5%;
  bottom: 5%;
  right: 5%;
  left: 5%;
  background-color: white;
  overflow-y: scroll;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
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

const VideoInfo = styled(Col)`
  /* width: 560px; */
`;

const Title = styled.h2`
  font-size: 15px;
  margin: 0;
`;
const Description = styled.p`
  font-size: 13px;
  margin: 0;
`;

const RelatedVideosContainer = styled(ColGrow)`
  padding: 5px;
`;

const VideoItem = styled(Row)``;

export {
  Overlay,
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
};
